const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

// load config
dotenv.config({ path: '../../config/config.env' });

function auth(req, res, next) {
    // send along token from react
    const token = req.header('x-auth-token');

    // check for token
    if (!token) res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        // if token then verify
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Add user from payload
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
};

module.exports = auth;