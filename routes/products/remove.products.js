const express = require('express');
const router = express.Router();
const mongo = require("mongodb");
const ObjectId = require('mongodb').ObjectId;
const mongoPath = require("../path.mongodb");
const fs = require('fs')

/* GET remove products. */
router.get('/:id', (req, res, next) => {
  mongo.connect(mongoPath, (err,db) => {
    db.collection('products').findOne({_id: ObjectId(req.query._id)}, (err, data) => {
      db.collection('products').deleteOne({_id: ObjectId(req.query._id)}, (err, result) => {
        db.close();
        if(!err){
          fs.unlink(`public/${data.image.split("./").join("")}`, (err) => {
            if(!err){
              res.send(`/productsAll/${req.query._id}`)
            }
          })
        } else {
          res.render("error")
        }
      })
    })
  })
});

module.exports = router;
