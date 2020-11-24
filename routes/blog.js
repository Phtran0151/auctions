const express = require('express');
const router = express.Router();
const mongo = require("mongodb");

/* GET blog page. */
router.get('/', function(req, res, next) {
  res.render('blog');
});

module.exports = router;