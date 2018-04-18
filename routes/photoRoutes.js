const Command = require('../controllers/userController.js');
const router = require('express').Router();
const path = require('path');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const s3 = new aws.S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.PRIVATE_KEY,
  region: 'us-west-1',
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.S3_BUCKET,
    acl: 'public-read',
    key(req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
});

// adding a new album
router.post('/api/createAlbum', upload.any(), (req, res) => {
  Command.addNewAlbum(req.body.user, req.body.name, req.files[0].location, req.body.description)
    .then(user => Command.findUser(user._id))
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});


// Adding a photo
router.post('/api/addPhoto', upload.any(), (req, res) => {
  Command.addNewPhoto(req.body.author, req.body.album, req.body.name, req.files[0].location)
    .then(album => Command.getPhotos(album._id))
    .then((album) => {
      res.send(album);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

// Dealing with a single photo page
router.get('/api/photos/:id', (req, res) => {
  Command.getComments(req.params.id)
    .then((photo) => {
      res.send(photo);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

// deleting a photo
router.delete('api/photos/:AlbumId/:PhotoId', (req, res) => {
  // needs Photo and album id
  Command.deletePhoto(req.params.AlbumId, req.params.PhotoId)
    .then(album => Command.getPhotos(album._id))
    .then((album) => {
      res.send(album);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

// Adding a comment
router.post('/api/addComment', (req, res) => {
  console.log(req.body);
  Command.addNewComment(req.body.userID, req.body.photoID, req.body.text)
    .then((photo) => {
      res.send(photo);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

router.delete('/api/comment/:PhotoId/:CommentId', (req, res) => {
  // needs comment and photo id
  Command.deleteComment(req.params.PhotoId, req.params.CommentId)
    .then(photo => Command.getComments(photo._id))
    .then((photo) => {
      res.send(photo);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
