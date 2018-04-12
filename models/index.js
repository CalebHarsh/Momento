const ko = require('nekodb');
const User = require('./User.js');
const Album = require('./Album.js');
const Photo = require('./Photo.js');
const Comment = require('./Comment.js');

ko.connect({
  client: 'mongodb',
  url: process.env.MONGODB_URI || 'mongodb://localhost/momento',
});

const db = {
  User,
  Album,
  Photo,
  Comment,
};


module.exports = db;
