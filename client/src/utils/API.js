import axios from 'axios';

export default {
  // Create a new user
  createNewUser: data => axios.post('/api/signup', data),
  signIn: data => axios.post('/api/login', data),

  addAlbum: data => axios.post('/api/createAlbum', data),
  addFriendsAlbum: data => axios.put('/api/addFriendAlbum', data),

  addPhoto: data => axios.post('/api/addPhoto', data),
  addComment: data => axios.post('/api/addComment', data),
  getAllAlbums: path => axios.get(`/api/${path}`),
  getAllPhotos: path => axios.get(`/api/${path}`),

  checkUser: () => axios.get('/auth'),
  logout: () => axios.get('/logout'),
};
