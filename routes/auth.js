module.exports.adminIsLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};