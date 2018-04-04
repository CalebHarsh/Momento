const Command = require("../controllers/userController.js")
const ko = require('nekodb')

Command.signUp({
  name: "Caleb",
  password: "Password123",
  email: "caleb.harsh139@gmail.com"
})
  .then(user => {
    console.log("User Created", user.slice())

    return Command.signUp({
      name: "Apple",
      password: "Password123",
      email: "applegarcia15@gmail.com"
    })

  })
  .then(user => {
    console.log("User Created 2", user.slice())

    return Command.addFriend(user._id, "caleb.harsh139@gmail.com")
  })
  .then(user => {
    console.log("Caleb Added as a friend")

    return Command.getAllFriends(user._id)
      .then(userFriends => {
        console.log('Apples Friends: ', userFriends.slice())

        return Command.addNewAlbum(user._id, "Apples Album")
      })
  })
  .then(user => {
    console.log("Apple Album created")

    return Command.getAlbums(user._id)
      .then(albums => {
        console.log("Apples Albums: ", albums.slice())

        return Command.addNewPhoto(user._id, albums[0]._id, "Apples New Photo")
      })
      .then(albums => {
        console.log("Apple Photo created")

        return Command.getPhotos(albums._id)
      })
      .then(photos => {
        console.log("Photos in Apples Album: ", photos.slice())

        return Command.addNewComment(user._id, photos[0]._id, "Apples Comment on Photo")
      })
      .then(photo => {
        console.log("Apples Comment Saved")

        return Command.getComments(photo._id)
      })
      .then(comments => {
        console.log("Comments for photo: ", comments.slice())

        return Command.logIn("caleb.harsh139@gmail.com", "Password123")
      })
      .then(userCaleb => {
        console.log("Caleb Signed in")

        return Command.addExistingAlbum(userCaleb._id, user.albums[0])
      })
      .then(userCaleb => {
        console.log("Caleb added Apples Album")

        return Command.getAlbums(userCaleb._id)
          .then(calebAlbums => {
            console.log('Caleb Albums ', calebAlbums.map(album => album.slice()))

            return Command.updateUserData(userCaleb._id, {
              name: "Jeremiah",
              password: "12345Password"
            })
          })
      })
      .then(calebUser => {
        console.log("User Info changed ", calebUser.slice())

        return "All commands working"
      })
  })
  .then(resp => console.log(resp))
  .catch(err => console.log(err))





// Command.logIn("caleb.harsh139@gmail.com", "Password123")
// // .then(user => Command.updateUserData(user._id, {
// //   name: "Not Apple",
// //   password: "Password123"
// // }))
// // .then(user => console.log(user.slice()))
// // .catch(err => console.log(err))
// // .then(() => ko.models.User.find({}))
// // .then(users => console.log(users.map(user => user.slice())))
// .then(user => Command.addFriend(user._id, "caleb.harsh139@gmail.com"))
// .then(user => console.log(user.slice()))
// .catch(err => console.log(err))
