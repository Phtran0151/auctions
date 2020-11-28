const express = require('express');
const router = express.Router();
const checkLogin = require('../config/sessionAuth')

/* GET Login page. */
router.get('/', (req, res, next) => {
  res.render('users/login', { title: "Sign in to join the auction!" });
});

module.exports = router;