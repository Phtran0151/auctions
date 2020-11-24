const express = require('express');
const router = express.Router();
const mongo = require("mongodb");

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('about');
})

module.exports = router;