const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const passport = require('passport');

// load config
dotenv.config({ path: '../../config/config.env' });

// User Model
const User = require('../../models/User');

// @route   POST api/auth
// @desc    Auth user
// @access  Public
router.post('/', (req, res) => {
    const { email, password } = req.body;

    // Simple validation
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing user
    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'User does not exists' });

            // Validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' })

                    jwt.sign(
                        { id: user.id },
                        process.env.JWT_SECRET,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            });
                        }
                    );
                });
        });
});

// @route   GET api/auth/user
// @desc    Get user data; constantly validate user thats logged in
// @access  Private
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        // to not return password
        .select('-password')
        .then(user => res.json(user))
});

// @desc Auth with Google
// @route GET api/auth/google
// @access  Public
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// @desc Google auth callback
// @route GET api/auth/google/callback
// @access  Public
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    const googleId = req.user.googleId;
    // Check for existing user
    User.findOne({ googleId })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'User does not exists' });

            jwt.sign(
                { id: user.id },
                process.env.JWT_SECRET,
                { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            googleId: user.googleId,
                            displayName: user.displayName
                        }
                    });
                }
            );
        });
});

module.exports = router;
