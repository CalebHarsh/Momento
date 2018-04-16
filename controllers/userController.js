const bcrypt = require('bcrypt');
const db = require('../models');

const UserCommands = {

  findUser: id => {
    return db.User.findById(id).join();
  },

  passportLogin: (email, password, done) => {
    return db.User.findOne({ email }).join()
      .then(user => {
        if (!user) return done(null, false, { message: 'Email not found' });
        if (!bcrypt.compareSync(password, user.password)) return done(null, false, { message: 'Incorrect password.' });
        return done(null, user);
      })
      .catch(err => {
        return done(err);
      });
  },

  logIn: (email, password) => {
    return db.User.findOne({ email }).join()
      .then(inst => {
        if (inst) throw new Error('Email not there');
        if (bcrypt.compareSync(password, inst.password)) console.log('Signed In');
        else throw new Error('Password is Incorrect');
        return inst;
      });
  },

  signUp: formInfo => db.User.findOne({ email: formInfo.email })
    .then(user => (user ? new Error('Email already in Use') :
      db.User.create({
        name: formInfo.name,
        email: formInfo.email,
        password: formInfo.password,
        albums: [],
        friends: [],
      })
        .save()))
    .then(user => (user || new Error('Form Incorrectly Filled Out'))),

  /* eslint arrow-body-style: 0 */
  getAllFriends: (UserID) => {
    return db.User.findById(UserID)
      .join({ friends: { name: 1, email: 1 } })
      .then(user => user.friends);
  },

  addFriend: (UserID, friendEmail) => {
    // console.log("Friend Adding")
    return db.User.findById(UserID)
      /* eslint arrow-parens: 0 */
      .then(user => {
        return db.User.findOne({ email: friendEmail })
          .then(friend => {
            /* eslint no-underscore-dangle: 0 */
            if (friend) user.friends.$addToSet(friend._id);
            return user.save();
          });
      });
  },

  updateUserData: (UserID, userdata) => {
    return db.User.findById(UserID)
      .then(user => {
        /* eslint no-param-reassign: 0 */
        user.name = userdata.name;
        if (userdata.password) user.password = userdata.password;
        return user.save();
      });
  },

  getAlbums: (UserID) => {
    return db.User.findById(UserID).join()
      .then(user => user);
  },

  addNewAlbum: (UserID, albumName, albumCover, albumDesc) => {
    // console.log(UserID, albumName, albumCover)
    return db.User.findById(UserID).join()
      .then(user => {
        user.albums.$push({
          users: [user._id],
          name: albumName,
          photos: [],
          cover: albumCover,
          description: albumDesc,
        });

        // console.log("adding album")
        return user.saveAll();
      });
  },

  addExistingAlbum: (UserID, AlbumID) => {
    return db.User.findById(UserID).join()
      .then(user => {
        if (user.albums.includes(AlbumID)) throw new Error('You already have this album');
        return db.Album.findById(AlbumID)
          .then(album => {
            if (album) album.users.$addToSet(UserID);
            album.saveAll();
            return user;
          });
      })
      .then(user => {
        user.albums.$addToSet(AlbumID);
        return user.save();
      });
  },

  removeAlbum: (UserID, AlbumID) => {
    return db.User.findById(UserID)
      .then(user => {
        user.albums.$pull(AlbumID);
        return db.Album.findByID(AlbumID)
          .then((album) => {
            album.users.$pull(UserID);
            if (!album.users.length) {
              this.deleteAlbum(album);
            } else {
              album.save();
            }
            return user.save();
          });
      });
  },

  deleteAlbum: (AlbumInst) => {
    if (AlbumInst.photos.length) {
      const photos = AlbumInst.photos.map(photo => {
        return this.deletePhoto(AlbumInst._id, photo);
      });
      Promise.all(photos).then(values => {
        console.log(values);
      });
    }
    AlbumInst.delete();
  },

  getPhotos: (AlbumID) => {
    return db.Album.findById(AlbumID).join()
      .then(album => {
        // console.log("commands", album.slice())
        return album;
      });
  },

  addNewPhoto: (UserID, AlbumID, photoName, photoLocation) => {
    return db.Album.findById(AlbumID).join()
      .then(album => {
        album.photos.$push({
          author: UserID,
          name: photoName,
          comments: [],
          href: photoLocation,
        });
        return album.saveAll();
      });
  },

  deletePhoto: (AlbumID, PhotoID) => {
    return db.Album.findById(AlbumID)
      .then(album => {
        album.photos.$pull(PhotoID);
        return db.Photo.findByID(PhotoID)
          .then(photo => {
            if (photo.comments.length) {
              const deletedComments = photo.comments.map(comment => {
                return this.deleteComment(comment);
              });
              Promise.all(deletedComments)
                .then(values => {
                  console.log(values);
                });
            }
            photo.delete();
            return album.save();
          });
      });
  },

  getComments: (PhotoID) => {
    return db.Photo.findById(PhotoID).join()
      .then(photo => photo);
  },

  addNewComment: (UserID, PhotoID, commentText) => {
    return db.Photo.findById(PhotoID)
      .then(photo => {
        photo.comments.$push({
          text: commentText,
          author: UserID,
        });
        return photo.saveAll();
      });
  },

  deleteComment: (CommentID) => {
    return db.Comment.deleteById(CommentID);
  },
};

module.exports = UserCommands;
