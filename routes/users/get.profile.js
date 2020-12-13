const express = require('express');
const router = express.Router();

/* GET Dashboard page of users. */
router.get('/', (req, res, next) => {
  let user = req.session
  console.log(user.avatar)
  if(!user) {
    res.redirect('users/login');
  } else {
    res.render(`users/profile`, { user: user });
  }
});

module.exports = router;