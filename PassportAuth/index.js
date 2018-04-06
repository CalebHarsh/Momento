///////*  EXPRESS SETUP  */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile('auth.html', { root : __dirname}));

const port = process.env.PORT || 3000;
app.listen(port , () => console.log('App listening on port ' + port));

///////*  PASSPORT SETUP  */

const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

app.get('/success', (req, res) => res.send("Welcome "+req.query.username+"!!"));
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    cb(err, user);
  });
});

//////* COOKIE-SESSION SETUP

var cookieSession = require('cookie-session')
 
app.use(cookieSession({
  name: 'session',
  keys: ['scootypuffjrsucks'],
 
  // Cookie Options
  maxAge: 12 * 60 * 60 * 1000 // 12 hours
}))

//////* NEKO SETUP */

// const ko = require('nekodb');

// ko.connect({
//     client: 'mongodb',
//     address: 'localhost:27017',
//     database: 'nekodb'
// })

// const UserDetails = ko.Model ('UserDetails' , {
//   username: ko.String,
//   password: ko.String
// })

// const user1 = ko.models.UserDetails.create()

// user1.username = 'Apple'
// user1.password = 'password'

// user1.save().then(user => {
//   console.log(user._id)
//   console.log("User 1 Registered")
// })

//////* MONGOOSE SETUP */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MyDatabase');

const Schema = mongoose.Schema;
const UserDetail = new Schema({
      username: String,
      password: String
    });
const UserDetails = mongoose.model('userInfo', UserDetail, 'userInfo');

//////* PASSPORT LOCAL AUTHENTICATION */

const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
      UserDetails.findOne({
        username: username
      }, function(err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false);
        }

        if (user.password != password) {
          return done(null, false);
        }
        return done(null, user);
      });
  }
));

app.post('/',
  passport.authenticate('local', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/success?username='+req.user.username);
  });