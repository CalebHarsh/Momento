const ko = require("nekodb")

const Album = ko.Model("Album", {
  name: ko.String,
  photos: [ko.models.Photo]
})

module.exports = Album