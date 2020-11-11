const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const connectDB = require('./config/db');

// load config
dotenv.config({ path: './config/config.env' });

// Passport
require('./config/passport')(passport);


// Connect to Mongo
connectDB();

const app = express();

// Bodyparser Middleware
app.use(express.json());

// logging request etc to the console in dev env
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Sessions Middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/favors', require('./routes/api/favors'));

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
);