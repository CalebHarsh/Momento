const ko = require("nekodb")

const Photo = ko.Model("Photo", {
  author: ko.models.User,
  comments: [ko.models.Comment]
})

module.exports = Photo