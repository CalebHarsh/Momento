//Dependencies

const express = require('express');
const app = express();
const mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

//Fetch the MongoDB
var configDB = require('./config/database.js');

// Connect to our database
mongoose.connect(configDB.url); 

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