const express = require('express');
const router = express.Router();
const mongo = require("mongodb");
const path = require("../path.mongodb");
const multer = require("multer")
const produceImage = require('../config/avatar.images');
const storage = multer.diskStorage(produceImage)
const upload = multer({ storage: storage });

/* UPDATE account POST method. */
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