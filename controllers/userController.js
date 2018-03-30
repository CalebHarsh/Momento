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
          albums: []
        })
          .save())
      .then(user => user ? user : new Error("Email already in Use"))
      .catch(err => err)
  },

  addNewAlbum: (UserID, albumName) => {
    return db.User.findById(UserID)
      .then(user => {
        user.albums.push({
          name: albumName,
          photos: []
        })
        return user.saveAll()
      })
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

  addNewComment: (UserID, commentText) => {
    return db.Photo.findById(PhotoID)
      .then(photo => {
        photo.coments.push({
          text: commentText,
          author: UserID
        })
        return photo.saveAll()
      })
  }

}

module.exports = UserCommands
