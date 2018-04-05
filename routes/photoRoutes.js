const Command = require("../controllers/userController.js")
const router = require("express").Router()
const aws = require("aws-sdk")
const multer = require("multer")
const multerS3 = require("multer-s3")

const s3 = new aws.S3({
  key:  "AKIAJPLTFA7PFFKFDQKQ",
  secret:  "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"
})

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "momento-139",
    key: function(req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})


//Adding a photo
router.post("/api/addPhoto", upload.single("photo"), (req, res) => {
  console.log(req.file)
  res.send("Got file")
  // Command.addNewPhoto(req.body.userID, req.body.albumID, req.body.photoName)
  //   .then()
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