const ko = require('nekodb');
const bcrypt = require('bcrypt');

const Password = ko.String.minlength(8)
  .match(/[a-z]/)
  .match(/[A-Z]/)
  .match(/\d/);

const User = ko.Model('User', {
  name: ko.String.minlength(2),
  friends: [ko.models.User],
  password: Password,
  email: ko.Email,
  albums: [ko.models.Album],
  lastLogin: ko.Date.now(),
  // socialMedia: {
  //   facebook: {
  //     id: [ko.String, null],
  //     token: [ko.String, null]
  //   },
  //   google: {
  //     id: [ko.String, null],
  //     token: [ko.String, null]
  //   }
  // },
  $$indexes: {
    email: {
      unique: true,
    },
  },
  $$hooks: {
    presave: (user, next) => {
      if (user.isUpdated('password')) {
        return bcrypt.hash(user.password, 8, (err, hash) => {
          if (err) {
            return next(err);
          }
          /* eslint no-param-reassign: 0 */
          user.password = hash;
          return next();
        });
      }
      return next();
    },
  },
});

module.exports = User;
