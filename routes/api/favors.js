const auth = require('../../middleware/auth');
const express = require('express');
const router = express.Router();

// Favor model
const Favor = require('../../models/Favor');
const User = require('../../models/User');

// @route   GET api/favors
// @desc    Get all favors
// @access  Public
router.get('/', async (req, res) => {
    try {
        const favors = await Favor.find();
        if (!favors) throw Error('No favors');

        res.status(200).json(favors);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});

// @route   GET api/favors/:userId
// @desc    Get favors created by a user
// @access  Public
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) throw Error('User does not exist');

        const favor = await Favor.find({ createdBy: user });
        if (!favor) throw Error('Something went wrong while finding the favors');

        res.status(200).json(favor)
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});

// @route   POST api/favors
// @desc    Create a favor
// @access  Private
router.post('/', auth, async (req, res) => {
    const newFavor = new Favor({
        title: req.body.title,
        description: req.body.description,
        deadline: req.body.deadline,
        createdBy: req.user.id
    });

    try {
        const favor = await newFavor.save();
        if (!favor) throw Error('Something went wrong while saving the favor');

        res.status(200).json(favor);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});

// @route   PUT api/favors/:id
// @desc    Update a favor
// @access  Private
router.put('/:id', auth, async (req, res) => {
    try {
        const favor = await Favor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!favor) throw Error('Something went wrong trying to find and update the favor');

        res.status(200).json(favor);
    } catch (e) {
        res.status(400).json({ msg: e.message, success: false });
    }
});

// @route   DELETE api/favors/:id
// @desc    Delete a favor
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const favor = await Favor.findById(req.params.id);
        if (!favor) throw Error('No favor found');

        const removed = await favor.remove();
        if (!removed) throw Error('Something went wrong trying to delete the favor');

        res.status(200).json({ success: true });
    } catch (e) {
        res.status(400).json({ msg: e.message, success: false });
    }
});

module.exports = router;