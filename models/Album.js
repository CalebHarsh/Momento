const ko = require('nekodb');

const Album = ko.Model('Album', {
  users: [ko.models.User],
  name: ko.String.minlength(2),
  photos: [ko.models.Photo],
  cover: ko.String,
});

module.exports = Album;
