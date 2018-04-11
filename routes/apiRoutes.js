const Command = require("../controllers/userController.js")
const router = require("express").Router()
// const path = require("path");
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
router.put("/api/login",  passport.authenticate('local-login', {
   // redirect to the secure profile section
  failureRedirect : '/', // redirect back to the signup page if there is an error
  failureFlash : true // allow flash messages
}),
(req, res) => {
  console.log(req.body)
  Command.logIn(req.body.email, req.body.password)
    // .then(user => res.redirect(`/dashboard/${user._id}`))
    .then(user => res.send(user))
    .catch(err => res.send(err))
})

// Send every request to the React app
// Define any API routes before this runs
// router.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router