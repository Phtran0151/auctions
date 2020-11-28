const express = require('express');
const router = express.Router();

/* GET Dashboard page of users. */
router.get('/', (req, res, next) => {
  if(!req.session.user) {
    res.redirect('users/login');
  } else {
    res.render(`users/dashboard`, { user: req.session.user });
  }
});

module.exports = router;