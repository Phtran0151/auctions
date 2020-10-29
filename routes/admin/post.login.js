const express = require('express');
const router = express.Router();

/* POST admin login*/
router.post('/', (req, res) => {
  let { username, password, roles } = req.body
  require('mongodb').connect(require('../path.mongodb'), (err, db) => {
    db.collection("users").find().toArray((err, result) => {
      console.log(result)
    })
  })
})

module.exports = router;
// admin1 ,pass: 123456