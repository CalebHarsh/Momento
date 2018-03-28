const ko = require('nekodb')
const User = require("../controllers/userController.js")

// User.signUp({
//   name: "Caleb",
//   password: "Password123",
//   email: "caleb.harsh139@gmail.com"
// })

User.logIn("caleb.harsh139@gmail.com", "Password23")