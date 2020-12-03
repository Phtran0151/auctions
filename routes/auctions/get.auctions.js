const express = require('express');
const router = express.Router();
const mongo = require("mongodb");
const path = require("../path.mongodb");

/* GET home page. */
router.get('/', function(req, res, next) {
  // mongo.connect(path, (err, db) => {
  //   db.collection("products").find().toArray((err,result) => {
  //     let product = result;
  //   })
  //   db.close();
  // })
  res.render('auctions/bidders')
});

module.exports = router;