const express = require('express');
const router = express.Router();

/* GET Login page. */
router.get('/', function(req, res, next) {
  res.render('users/login', { title: "Sign in to join the auction!" });
});

module.exports = router;