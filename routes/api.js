const Commands = require("../controllers/userController.js")
const ko = require("nekodb")

Commands.signUp({
  name: "Caleb",
  password: "Password123",
  email: "caleb.harsh139@gmail.com"
}).then(user => 
//   Commands.signUp({
//   name: "Apple",
//   password: "Password123",
//   email: "applegarcia15@gmail.com"
// })).then(user => Commands.addFriend(user._id, "caleb.harsh139@gmail.com"))
// .then(appleUser => ko.models.User.findById(appleUser._id).join() )
// .then(user => console.log(user.slice()))


Commands.logIn("caleb.harsh139@gmail.com", "Password123")
.then(user => Commands.addNewAlbum(user._id, "New Album"))
.then(user => Commands.addNewPhoto(user._id, user.albums[0], "New Photo")
  .then(album => Commands.addNewComment(user._id, album.photos[0], "This is a comment" )))
.catch(err => console.log(err)))