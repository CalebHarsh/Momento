const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser")


const passport = require("passport")
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

passport.serializeUser(function(user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(function(id, cb) {
  UserDetails.findById(id).then(user => {
    cb(err, user);
  });
});

//Set up body-parser


// connnect to DataBase
// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.use(require("./routes/apiRoutes.js"))

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

