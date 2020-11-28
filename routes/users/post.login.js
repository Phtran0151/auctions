const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

/* POST users login*/
router.post('/', (req, res) => {
  let name = req.body.username
  let password = req.body.password
  require('mongodb').connect(require('../path.mongodb'), (err, db) => {
    db.collection("users").find().toArray((err, data) => {
      let result = data[0]
      if (name === result.username && bcrypt.compareSync(password, result.password)) {
        req.session.user = {
          id: result._id,
          uname: result.username
        }
        res.redirect("users/dashboard");
      } else {
        res.render("users/login")
      }
    })
  })
})

module.exports = router;