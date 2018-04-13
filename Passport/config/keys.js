// Expose our config directly to our application using module.exports
module.exports = {

  facebookAuth: {
    clientID: '173259606660088', // Fb App ID
    clientSecret: 'c49f2171d46d2b7a10b8d98bb0c7ad1d', // Fb App Secret
    callbackURL: 'http://localhost:8080/auth/facebook/callback',
    profileURL: 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
    profileFields: ['id', 'email', 'name'], // For requesting permissions from Facebook API
  },

  googleAuth: {
    clientID: '99414565273-di4nh69on4n6rkge1q80pqpo0kb02v2e.apps.googleusercontent.com',
    clientSecret: 'GAechkwPDKK0dIGRkrvukibJ',
    callbackURL: 'http://localhost:8080/auth/google/callback',
  },

};
