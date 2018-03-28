const ko = require("nekodb")

ko.connect({
  client: 'mongodb',
  url: process.env.MONGODB_URL || 'mongodb://localhost/momento'
})

require("./User.js")
require("./Album.js")
require("./Photo.js")
require("./Comment.js")

module.exports = ko