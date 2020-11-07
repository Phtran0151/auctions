const express = require('express');
const router = express.Router();
const mongo = require("mongodb");

/* GET home page. */
router.get('/', function(req, res, next) {
  mongo.connect(require('../routes/path.mongodb'), (err, db) => {
    db.collections('users').count((err, user) => {
      db.close();
      res.render("admin/dashboard", { account: user })
    })
  })
});

module.exports = router;