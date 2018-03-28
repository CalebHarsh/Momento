const ko = require("nekodb")

const Password = ko.String.minlength(8)
                            .match(/[a-z]/)
                            .match(/[A-Z]/)
                            .match(/\d/)

const User = ko.Model("User", {
  name: ko.String,
  password: Password,
  email: ko.Email,
  albums: [ko.models.Album]
})

module.exports = User