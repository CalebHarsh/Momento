const Command = require('../controllers/userController.js');
const router = require('express').Router();

// dealing with dashboard to show albums
router.get('/api/dashboard/:id', (req, res) => {
  Command.getAlbums(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

// adding an existing album
router.post('/api/addFriendAlbum', (req, res) => {
  console.log(req.body);
  Command.addExistingAlbum(req.body.userID, req.body.albumID)
    .then(user => Command.findUser(user._id))
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

// Dealing with a single album page
router.get('/api/albums/:id', (req, res) => {
  Command.getPhotos(req.params.id)
    .then((album) => {
      res.json(album);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

// Deleteing album
router.delete('api/albums/:id', (req, res) => {
  // needs to have album and user ID
  Command.removeAlbum(req.params.id)
    .then(user => Command.findUser(user._id))
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
