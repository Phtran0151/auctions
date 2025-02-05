const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

/* POST users register */
router.post('/', (req, res, next) => {
  function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  let user = {
    fullname: req.body.fullname,
    phone: req.body.phone,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password[0], 10),
    token: require('crypto').randomBytes(64).toString('hex'),
    active: false,
    created: Date.now()
  }
  require('mongodb').connect(require('../path.mongodb'), (err, db) => {
    if (validateEmail(user.email) && (user.username && user.password) !== '') {
      db.collection("users").insertOne(user, (err) => {
        db.close();
        if (!err) {
          res.send(require('../users/message.users'));
        } else {
          res.send('Error!');
        }
      })
    }
  })
})

module.exports = router;