// TODO to be removed

const express = require('express');
const router = express.Router();

// @desc Login/Landing Page
// @route GET /
router.get('/', (req, res) => {
    res.send('Login');
});

// @desc Dashboard
// @route GET /
router.get('/dashboard', (req, res) => {
    res.send('Dashboard');
});

// test to connect BE to React
router.get('/express', (req, res) => {
    res.send({ express: 'Express B/E is connected to React' });
});

module.exports = router;