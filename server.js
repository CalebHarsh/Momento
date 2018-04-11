const express = require("express");
const path = require("path")
const app = express();
const bodyParser = require("body-parser")
const passport = require('passport');
// const flash    = require('connect-flash');
const cookieParser = require('cookie-parser');
const session      = require('express-session');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
if (process.env.NODE_ENV !== "production") {
  require('dotenv').load();
}
const PORT = process.env.PORT || 3001;

app.use(cookieParser());

passport.serializeUser(function(user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(function(id, cb) {
  UserDetails.findById(id).then(user => {
    cb(err, user);
  });
});

//Set up body-parser


// // Required for passport
// // Session secret
app.use(session({ secret: process.env.SESSION_SECRET }));

// // Use connect-flash for flash messages stored in session
// app.use(flash());

// connnect to DataBase
// Send every request to the React app
// Define any API routes before this runs
app.use(require("./routes/apiRoutes.js"))

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

