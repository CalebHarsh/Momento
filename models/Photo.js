const ko = require('nekodb');

const Photo = ko.Model('Photo', {
  author: ko.models.User,
  name: ko.String.minlength(2),
  comments: [ko.models.Comment],
  href: ko.String,
});

module.exports = Photo;
