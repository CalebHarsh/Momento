const bcrypt = require("bcrypt")
const ko = require("nekodb")
const User = ko.models.User

const UserCommands =  {
  logIn: (email, password) => {
    User.findOne({email: "caleb.harsh139@gmail.com"} )
    .then(inst => {
      if(bcrypt.compareSync(password, inst.password)) return inst
      else throw new Error("Password is Incorrect")
    })
    .then(user => console.log(user.slice()))
    .catch(err => console.log(err))
  },

  signUp: (formInfo) => {
    User.findOne({email: formInfo.email})
    .then(user => user ? null : 
      User.create({
        name: formInfo.name,
        email: formInfo.email,
        password: formInfo.password,
        albums: []
      })
      .save())
    .then(user => user ? console.log(user.slice()) : console.log("Email already in Use"))
    .catch(err => console.log(err))
  },



}

module.exports = UserCommands
