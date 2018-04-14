
const express = require("express");
const path = require("path")
const app = express();
const dotenv = require('dotenv');
const bodyParser = require("body-parser")
// const passport = require('passport');
// const flash    = require('connect-flash');
const cookieParser = require('cookie-parser');
const session      = require('express-session');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

if (process.env.NODE_ENV !== "production") {
  require('dotenv').load();
}
const PORT = process.env.PORT || 3001;

app.use(cookieParser());


//Set up body-parser
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

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

