import axios from 'axios';

export default {
  // Create a new user
  createNewUser: data => axios.post('/api/signup', data),
  signIn: data => axios.post('/api/login', data),

  addAlbum: data => axios.post('/api/createAlbum', data),
  addFriendsAlbum: data => axios.post('/api/addFriendAlbum', data),

  addPhoto: data => axios.post('/api/addPhoto', data),
  addComment: data => axios.post('/api/addComment', data),
  getAllAlbums: path => axios.get(`/api/${path}`),
  getAllPhotos: path => axios.get(`/api/${path}`),
  getAllComments: path => axios.get(`/api/photos/${path}`),

  checkUser: () => axios.get('/auth'),
  logout: () => axios.get('/logout'),

  deleteAlbum: (userID, albumID) => axios.delete(`/api/albums/${userID}/${albumID}`),
  deletePhoto: (albumID, photoID) => axios.delete(`/api/photos/${albumID}/${photoID}`),
  deleteComment: (photoID, commentID) => axios.delete(`/api/comments/${photoID}/${commentID}`),
};
