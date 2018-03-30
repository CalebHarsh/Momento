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
      .then(user => user ? null :
        db.User.create({
          name: formInfo.name,
          email: formInfo.email,
          password: formInfo.password,
          albums: [],
          friends: []
        })
          .save())
      .then(user => user ? user : new Error("Email already in Use"))
      .catch(err => err)
  },

  addFriend: (UserID, friendEmail) => {
    return db.User.findById(UserID)
      .then(user => db.User.findOne({ email: friendEmail })
        .then(friend => {
          if(friend) user.friends.push(friend._id)
          return user.save()
        })
      )
  },

  updateUserData: (UserID, userdata) => {
    return db.User.findById(UserID)
      .then(user => {
        user.name = userdata.name
        //able to change password coming
        return user.save()
      })
  },

  getAlbums: (UserID) => {
    return db.User.findById(UserID).join()
      .then(user => user.albums)
  },

  addNewAlbum: (UserID, albumName) => {
    return db.User.findById(UserID)
      .then(user => {
        user.albums.push({
          users: [user._id],
          name: albumName,
          photos: []
        })
        return user.saveAll()
      })
  },

  addExistingAlbum: (UserID, AlbumID) => {
    return db.Album.findById(AlbumID)
      .then(album => {
        if(album) album.users.push(UserID)
        return album.save()
      })
      .then(album => db.User.findById(UserID))
      .then(user => {
        user.albums.push(AlbumID)
        return user.save()
      })
  },

  getPhotos: (AlbumID) => {
    return db.Album.findById(AlbumID).join()
      .then(album => album.photos)
  },

  addNewPhoto: (UserID, AlbumID, photoName) => {
    return db.Album.findById(AlbumID)
      .then(album => {
        album.photos.push({
          author: UserID,
          name: photoName,
          comments: []
        })
        return album.saveAll()
      })
  },

  getComments: (PhotoID) => {
    return db.Photo.findById(PhotoID).join()
      .then(photo => photo.comments)
  },

  addNewComment: (UserID, PhotoID, commentText) => {
    return db.Photo.findById(PhotoID)
      .then(photo => {
        photo.comments.push({
          text: commentText,
          author: UserID
        })
        return photo.saveAll()
      })
  }

}

module.exports = UserCommands
