// Confirms if user is logged in
// If they are NOT logged in, redirect to Home Page

function isLoggedIn(req, res, next) {
// If user is authenticated in the session, carry on
  if (req.isAuthenticated()) { return next(); }
  // If they aren't redirect them to the home page
  return res.redirect('/');
}

module.exports = function (app, passport) {
  // Process the Login form
  app.post('/', passport.authenticate('local-login', {
    successRedirect: '/albums', // redirect to the secure profile section
    failureRedirect: '/', // redirect back to the signup page if there is an error
    failureFlash: true, // allow flash messages
  }));

  // PROFILE SECTION
  // We will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  app.get('/albums', isLoggedIn, (req, res) => {
    res.render('../client/src/pages/Albums.js', {
      user: req.user, // get the user out of session and pass to template
    });
  });

  // LOGOUT
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
