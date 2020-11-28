const express = require('express');
const router = express.Router();
const mongo = require("mongodb");
const path = require("./path.mongodb");

/* GET home page. */
router.get('/', (req, res, next) => {
  mongo.connect(path, (err, db) => {
    db.collection("products").find().toArray((err,result) => {
      let product = result;
      res.render('index', { items: product, user: req.session.user })
    })
    db.close();
  })
});

module.exports = router;