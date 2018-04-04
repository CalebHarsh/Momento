import axios from 'axios';

export default {
  // Create a new user
  createNewUser: () => {
    return axios.post('/api/signup')
  },
  signIn: () => {
    return axios.put('/api/login')
  }
}