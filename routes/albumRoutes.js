const Command = require('../controllers/userController.js');
const router = require('express').Router();

// dealing with dashboard to show albums
router.get('/api/dashboard/:id', (req, res) => {
  Command.getAlbums(req.params.id)
    .then(user => {
      res.json(user)
    })
    .catch(err => res.send(err))
})

// adding an existing album
router.put('/api/addFriendAlbum', (req, res) => {
  Command.addExistingAlbum(req.body.userID, req.body.albumID)
    .then(friends => res.json(friends))
    .catch(err => res.send(err));
});

//Dealing with a single album page
router.get("/api/albums/:id", (req, res) => {
  Command.getPhotos(req.params.id)
    .then(album => {
      res.json(album)
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

// Deleteing album
router.delete('/albums/:id', (req, res) => {
  Command.deleteAlbum(req.params.id);
  console.log(res);
});

module.exports = router;
