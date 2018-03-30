const Commands = require("../controllers/userController.js")

// Commands.signUp({
//   name: "Caleb",
//   password: "Password123",
//   email: "caleb.harsh139@gmail.com"
// }).then(user => console.log(user.slice()))

Commands.logIn("caleb.harsh139@gmail.com", "Password123")
.then(user => Command.addNewAlbum(user._id, "New Album") )
.then(user => console.log(user.slice()))
.catch(err => console.log(err))