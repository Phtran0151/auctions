const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  if (req.session) {
    req.session.destroy((err) => {
      delete req.session;
      res.clearCookie('user_sid');
      res.redirect('/users/login') // will always fire after session is destroyed
    })
  }
});

module.exports = router;