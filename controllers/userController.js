const bcrypt = require("bcrypt")
const db = require("../models")

const UserCommands = {

  logIn: (email, password) => {
    return db.User.findOne({ email: email })
      .then(inst => {
        if (bcrypt.compareSync(password, inst.password)) console.log("Signed In")
        else throw new Error("Password is Incorrect")
        return inst
      })
  },

  signUp: (formInfo) => {
    return db.User.findOne({ email: formInfo.email })
      .then(user => user ? new Error("Email already in Use") :
        db.User.create({
          name: formInfo.name,
          email: formInfo.email,
          password: formInfo.password,
          albums: [],
          friends: []
        })
          .save())
      .then(user => user ? user : new Error("Form Incorrectly Filled Out"))
  },

  getAllFriends: (UserID) => {
    return db.User.findById(UserID)
      .join({ friends: { name: 1, email: 1 } })
      .then(user => user.friends)
  },

  addFriend: (UserID, friendEmail) => {
    // console.log("Friend Adding")
    return db.User.findById(UserID)
      .then(user => {
        return db.User.findOne({ email: friendEmail })
          .then(friend => {
            if (friend) user.friends.$addToSet(friend._id)
            return user.save()
          })
      })
  },

  updateUserData: (UserID, userdata) => {
    return db.User.findById(UserID)
      .then(user => {
        user.name = userdata.name
        if(userdata.password)  user.password = userdata.password
        return user.save()
      })
  },

  getAlbums: (UserID) => {
    return db.User.findById(UserID).join()
      .then(user => user)
  },

  addNewAlbum: (UserID, albumName) => {
    return db.User.findById(UserID)
      .then(user => {
        user.albums.$push({
          users: [user._id],
          name: albumName,
          photos: []
        })
        // console.log("adding album")
        return user.saveAll()
      })
  },

  addExistingAlbum: (UserID, AlbumID) => {
    return db.User.findById(UserID)
      .then(user => {
        if (user.albums.includes(AlbumID)) throw new Error("You already have this album")
        return db.Album.findById(AlbumID)
          .then(album => {
            if (album) album.users.$push(UserID)
            album.saveAll()
            return user
          })
      })
      .then(user => {
        user.albums.$push(AlbumID)
        return user.save()
      })
  },

  getPhotos: (AlbumID) => {
    return db.Album.findById(AlbumID).join()
      .then(album => album)
  },

  addNewPhoto: (UserID, AlbumID, photoName) => {
    return db.Album.findById(AlbumID)
      .then(album => {
        album.photos.$push({
          author: UserID,
          name: photoName,
          comments: []
        })
        return album.saveAll()
      })
  },

  getComments: (PhotoID) => {
    return db.Photo.findById(PhotoID).join()
      .then(photo => photo)
  },

  addNewComment: (UserID, PhotoID, commentText) => {
    return db.Photo.findById(PhotoID)
      .then(photo => {
        photo.comments.$push({
          text: commentText,
          author: UserID
        })
        return photo.saveAll()
      })
  }

}

module.exports = UserCommands
