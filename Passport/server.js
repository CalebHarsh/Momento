// Dependencies

const express = require('express');

const app = express();
const ko = require('nekodb');
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

// Fetch the MongoDB
const configDB = require('./config/database.js');

// Connect to our database
ko.connect({
  client: 'mongodb',
  url: process.env.MONGODB_URI || configDB,
});

// Pass passport for configuration
require('./config/passport')(passport);

// Read cookies (needed for auth)
app.use(cookieParser());

// Get info from page forms
app.use(bodyParser());

// Required for passport
// Session secret
app.use(session({ secret: 'scootypuffjrsucks' }));

// Persistent login sessions
app.use(passport.initialize());
app.use(passport.session());

// Use connect-flash for flash messages stored in session
app.use(flash());
