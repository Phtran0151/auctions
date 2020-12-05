const express = require('express');
const router = express.Router();
const mongo = require("mongodb");
const path = require("../path.mongodb");

/* POST auctions method. */
router.post('/', (req, res, next) => {
  console.log(req.body)
  // mongo.connect(path, (err, db) => {
  //   db.collection("auctions").insertOne(req.body, (err, result) => {
  //     db.close();
  //     if (!err) {

  //     }
  //   })
  // })
});

module.exports = router;