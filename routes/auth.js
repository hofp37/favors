const express = require('express');
const passport = require('passport');
const router = express.Router();

// @desc Auth with Google
// @route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// @desc Google auth callback
// @route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/'}), (req, res) => {
    res.redirect(`${process.env.REACT_APP}/dashboard`);
});

// @desc Logout user
// @route /auth/logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect(`${process.env.REACT_APP}/`);
});

// test to connect BE to React
router.get('/express', (req, res) => {
    res.send({ express: 'Express B/E is connected to React' });
});

module.exports = router;