const express = require('express');
const router = express.Router();

/* POST admin login*/
router.post('/', (req, res) => {
  let name = req.body.username
  let password = req.body.password
  require('mongodb').connect(require('../path.mongodb'), (err, db) => {
    db.collection("admin").find().toArray((err, data) => {
      let result = data[0]
      if (name === result.username && password === result.password) {
        res.render("admin/dashboard", { admin: result.username })
      } else {
        res.render("admin/login")
      }
    })
  })
})

module.exports = router;