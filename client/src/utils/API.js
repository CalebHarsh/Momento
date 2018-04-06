import axios from 'axios';

export default {
  // Create a new user
  createNewUser: (data) => {
    return axios.post('/api/signup', data)
    .then(res => {
      window.location.pathname="/"
    })
  },
  signIn: (data) => {
    return axios.put('/api/login', data)
  }
}