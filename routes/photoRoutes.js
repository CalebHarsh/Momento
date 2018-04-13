const Command = require("../controllers/userController.js")
const router = require("express").Router()
const path = require("path")
const aws = require("aws-sdk")
const multer = require("multer")
const multerS3 = require("multer-s3")

const s3 = new aws.S3({
  accessKeyId:  process.env.ACCESS_KEY,
  secretAccessKey: process.env.PRIVATE_KEY,
  region: "us-west-1"
})

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET,
    acl: "public-read",
    key: function(req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname))
    }
  })
})

//adding a new album
router.post("/api/createAlbum", upload.any(), (req, res) => {
  console.log(req.body)
  Command.addNewAlbum(req.body.user, req.body.name, req.body.cover, req.body.description)
    // req.files[0].location)
    .then(user => Command.findUser(user._id))
    .then(user => {
      console.log(user.slice())
      res.send(user)
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })
})


//Adding a photo
router.post("/api/addPhoto", upload.any(), (req, res) => {
  Command.addNewPhoto(req.body.author, req.body.album, req.body.name, req.files[0].location)
    .then(album => Command.getPhotos(album._id))
    .then(album => {
      res.send(album)
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })
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
    .then(photo => {
      res.send(photo)
    })
})

module.exports = router
