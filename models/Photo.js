const ko = require("nekodb")

const Photo = ko.Model("Photo", {
  author: ko.models.User,
  name: ko.String,
  comments: [ko.models.Comment]
})

module.exports = Photo