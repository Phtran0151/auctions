const express = require('express');
const router = express.Router();

/* POST admin login*/
router.post('/', (req, res) => {
  let { username, password } = req.body
  require('mongodb').connect(require('../path.mongodb'), (err, db) => {
    db.collection("users").find().toArray((err, data) => {
      let result = data[0]
      if (username === result.username && password === result.password) {
        res.render("admin/dashboard")
      } else {
        res.render("admin/login")
      }
    })
  })
})

module.exports = router;
// admin1 ,pass: 123456