import axios from 'axios';

export default {
  // Create a new user
  createNewUser: (data) => {
    return axios.post('/api/signup', data)
  },
  signIn: (data) => {
    return axios.put('/api/login', data)
  },

  addAlbum: (data) => {
    return axios.post("/api/createAlbum", data)
  },
  addFriendsAlbum: (data) => {
    return axios.put("/api/addFriendAlbum", data)
  },

  addPhoto: (data) => {
    return axios.post("/api/addPhoto", data)
  },
  addComment: (data) => {
    return axios.post("/api/addComment", data)
  }
  
}