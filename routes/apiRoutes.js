const Command = require("../controllers/userController.js")
const router = require("express").Router()

const passport = require("passport")
router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user._id);
});

passport.deserializeUser(function (id, cb) {
  Command.findUser(id).then(user => {
    cb(err, user);
  });
});

const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function (username, password, done) {
    Command.logIn(username, email)
      .then(user => user ? done(null, user) : done(null, false))
      .catch(err => done(err))
  }
));

const photos = require("./photoRoutes.js")
const albums = require("./albumRoutes.js")

router.use(photos)
router.use(albums)

//signing up route
router.post("/api/signup", (req, res) => {
  console.log(req.body)
  Command.signUp({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
    .then(user => res.redirect(`/dashboard/${user._id}`))
    .catch(err => res.send(err))
})

//login route
router.put("/api/login",
  passport.authenticate('local', { failureRedirect: '/error' }),
  (req, res) => {
    console.log(req.user)
    res.redirect(`/dashboard/${req.user._id}`)
  })

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router