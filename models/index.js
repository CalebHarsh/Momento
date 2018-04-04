const ko = require("nekodb")

ko.connect({
  client: 'mongodb',
  url: process.env.MONGODB_URL || 'mongodb://localhost/momento'
})

const db = {
  User: require("./User.js"),
  Album: require("./Album.js"),
  Photo: require("./Photo.js"),
  Comment: require("./Comment.js")
}


module.exports = db