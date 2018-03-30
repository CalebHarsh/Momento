const ko = require("nekodb")

const Comment = ko.Model("Comment", {
  text: ko.String.minlength(1),
  author: ko.models.User
})