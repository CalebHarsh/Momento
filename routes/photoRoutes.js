const Command = require("../controllers/userController.js")
const router = require("express").Router()

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

//deleting a photo
router.delete("/photos/:id", (req, res) => {
  Command.deletePhoto(req.body.id)
    .then()
    .catch(err => res.send(err))
})

//Adding a comment
router.post("/api/addComment", (req, res) => {
  console.log(req.body)
  Command.addNewComment(req.body.userID, req.body.photoID, req.body.text)
    .then()
})

module.exports = router