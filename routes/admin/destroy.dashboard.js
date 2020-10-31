const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.destroy((err) => {
    res.redirect('/admin/login') // will always fire after session is destroyed
  })
});

module.exports = router;