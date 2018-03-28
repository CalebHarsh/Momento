const ko = require("nekodb")

const Comment = ko.Model("Comment", {
  text: ko.String,
  author: ko.models.User
})