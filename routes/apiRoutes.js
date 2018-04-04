const Command = require("../controllers/userController.js")
const router = require("express").Router()

//signing up route
router.post("/api/signup", (req, res) => {
  console.log(req.body)
  Command.signUp({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
    .then(user => res.redirect(`/dashboard/${user._id}`))
    .catch(err => res.send(err))
})

//login route
router.put("/api/login", (req, res) => {
  console.log(req.body)
  Command.logIn(req.body.email, req.body.password)
    .then(user => res.redirect(`/dashboard/${user._id}`))
    .catch(err => res.send(err))
})

//dealing with dashboard to show albums
router.get("/dashboard/:id", (req, res) => {
  Command.getAlbums(req.params.id)
    .then(user => res.send(user))
    .catch(err => res.send(err))
})

//adding a new album
router.post("/api/createAlbum", (req, res) => {
  console.log(req.body)
  Command.addNewAlbum(req.body.userID, req.body.albumName)
    .then()
})

//adding an existing album
router.put("/api/addFriendAlbum", (req, res) => {
  console.log(req.body)
  Command.addExistingAlbum(req.body.userID, req.body.albumID)
    .then()
})

//Dealing with a single album page
router.get("/albums/:id", (req, res) => {
  Command.getPhotos(req.params.id)
    .then(album => res.send(album))
    .catch(err => res.send(err))
})

//Adding a photo
router.post("/api/addPhoto", (req, res) => {
  console.log(req.body)
  Command.addNewPhoto(req.body.userID, req.body.albumID, req.body.photoName)
    .then()
})

//Dealing with a single photo page
router.get("/photos/:id", (req, res) => {
  Command.getComments(req.params.id)
    .then(photo => res.send(photo))
    .catch(err => res.send(err))
})

//Adding a comment
router.post("/api/addComment", (req, res) => {
  console.log(req.body)
  Command.addNewComment(req.body.userID, req.body.photoID, req.body.text)
    .then()
})

module.exports = router