const Command = require("../controllers/userController.js")
const router = require("express").Router()
const passport = require('passport');

const photos = require("./photoRoutes.js")
const albums = require("./albumRoutes.js")

require("../passport.js")(passport)

router.use(passport.initialize());
router.use(passport.session());

router.use(photos)
router.use(albums)

function isLoggedIn(req, res, next) {
  // If user is authenticated in the session, carry on 
      if (req.isAuthenticated())
          return next();
  // If they aren't redirect them to the home page
      res.redirect('/');
  }


//signing up route
router.post("/api/signup", (req, res) => {
  console.log(req.body)
  Command.signUp({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
    // .then(user => res.redirect(`/dashboard/${user._id}`))
    .then(user => res.send(user))
    .catch(err => res.send(err))
})

//login route
router.post("/api/login", passport.authenticate('local-login'), 
(req, res) => {
  res.send(req.user)
})

router.get("auht/dashboard", isLoggedIn, (req, res) => {
  console.log("req", req.user, req)
  res.send(req.user)
})

router.get("auth/albums", isLoggedIn, (req, res) => {
  res.send(req.user)
})


module.exports = router