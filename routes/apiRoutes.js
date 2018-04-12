const Command = require("../controllers/userController.js")
const router = require("express").Router()
const passport = require('passport');

router.use(passport.initialize());
router.use(passport.session());
require("../passport.js")(passport)

router.use(passport.initialize());
router.use(passport.session());


const photos = require("./photoRoutes.js")
const albums = require("./albumRoutes.js")
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
  Command.signUp({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
    .then(user => {
      passport.authenticate('local-login')(req, res, function() {
        console.log("working")
        return res.send(req.user)
      })
    })
    .catch(err => res.send(err))
})

//login route
router.post("/api/login", passport.authenticate('local-login'), 
(req, res) => {
  res.send(req.user)
})


//check user
router.get("/auth", isLoggedIn, (req, res) => {
    res.send(req.user)
})

router.get("/logout", (req, res) => {
  console.log("logging out")
  req.logout();
  res.redirect('/');
})


module.exports = router