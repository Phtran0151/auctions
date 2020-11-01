const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users/register', { title: "Let's signed a account to use the service of mine!" });
});

module.exports = router;