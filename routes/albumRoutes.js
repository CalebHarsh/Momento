const Command = require("../controllers/userController.js")
const router = require("express").Router()

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
    .catch(err => res.send(err))
})

//Dealing with a single album page
router.get("/albums/:id", (req, res) => {
  Command.getPhotos(req.params.id)
    .then(album => res.send(album))
    .catch(err => res.send(err))
})

//Deleteing album
router.delete("/albums/:id", (req, res) => {
  Command.deleteAlbum(req.params.id)
})

module.exports = router