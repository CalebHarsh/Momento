const Command = require("../controllers/userController.js")
const router = require("express").Router()

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
router.put("/api/login", (req, res) => {
  console.log(req.body)
  Command.logIn(req.body.email, req.body.password)
    .then(user => res.redirect(`/dashboard/${user._id}`))
    .catch(err => res.send(err))
})

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router