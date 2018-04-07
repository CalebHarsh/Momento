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


//Adding a photo
router.post("/api/addPhoto", upload.any(), (req, res) => {
  console.log(req.files[0])
  res.send("Got file")
  Command.addNewPhoto(req.body.userID, req.body.albumID, req.body.photoName, req.files[0].location)
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