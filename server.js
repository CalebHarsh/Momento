const express = require("express");
const path = require("path")
const app = express();
const bodyParser = require("body-parser")

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
if (process.env.NODE_ENV !== "production") {
  require('dotenv').load();
}
const PORT = process.env.PORT || 3001;
//Set up body-parser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

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

