const express = require('express');
const router = express.Router();

/* GET Dashboard page of users. */
router.get('/', function(req, res, next) {
  let data = {
    id: '',
    username: []
  }
  data.id = req.query._id;
  console.log(data.id)
  data.username = data.username.concat(req.query.username)
  res.render("users/dashboard?=" + data._id);
});

module.exports = router;