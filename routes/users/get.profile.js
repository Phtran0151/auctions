const express = require('express');
const router = express.Router();

/* GET Dashboard page of users. */
router.get('/', (req, res, next) => {
  let user = req.session.user
  if(!user) {
    res.redirect('users/login');
  } else {
    res.render(`users/profile`, { user: user });
  }
});

module.exports = router;