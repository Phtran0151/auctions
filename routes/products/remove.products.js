const express = require('express');
const router = express.Router();
const mongo = require("mongodb");
const ObjectId = require('mongodb').ObjectId;
const pathMongodb = require("../path.mongodb");
const fs = require('fs')

/* GET remove products. */
router.get('/:id', function(req, res, next) {
  mongo.connect(pathMongodb,(err,db)=>{
    db.collection('products').findOne({_id: ObjectId(req.body._id)}, (err, result) => {
      db.collection('products').deleteOne({_id: ObjectId(req.body._id)},(err,re)=>{
        db.close()
        if(!err){
          res.send(`/productsAll/${ObjectId(req.body._id)}`)
          // fs.unlink(`public/${result.image.split("./").join("")}`,(err)=>{
          //   if(!err){
          //   }
          // })
        } else {
          res.render("error")
        }
      })
    })
  })
});

module.exports = router;
