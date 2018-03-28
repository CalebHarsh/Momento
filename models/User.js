const ko = require("nekodb")
const bcrypt = require("bcrypt")

const Password = ko.String.minlength(8)
                            .match(/[a-z]/)
                            .match(/[A-Z]/)
                            .match(/\d/)

const User = ko.Model("User", {
  name: ko.String,
  password: Password,
  email: ko.Email,
  albums: [ko.models.Album],
  lastLogin: ko.Date.now(),
  $$indexes: {
    email: {
      unique: true
    }
  },
  $$hooks: {
    presave: {
      password: (user, next) => {
        bcrypt.hash(user.password, 8, function(err, hash) {
          if(err) return next(err)
          user.password = hash
          next()
        })
      }
    }
  }
})

module.exports = User