const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  req.session.destroy((err) => {
    delete req.session;
    res.redirect('/users/login') // will always fire after session is destroyed
  })
});

module.exports = router;