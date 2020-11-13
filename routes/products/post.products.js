const express = require('express');
const router = express.Router();
const mongo = require("mongodb");
const path = require("../path.mongodb");
const multer = require("multer")
const produceImage = require('../config/produce.images');
const storage = multer.diskStorage(produceImage)
const upload = multer( { storage: storage } );

/* POST products page. */
router.post('/', (req, res, next) => {
  var pro = req.body
  let content = {
    post_date: new Date(Date.now(pro.date_post)),
    name: pro.name_pro,
    price: pro.price_pro,
    bid_date: new Date(pro.bid_date),
    image: pro.images_pro,
    description: pro.description
  }
  mongo.connect(path, (err, db) => {
    // content.image = req.file.path.split("public").join(".")
    for (var i = 0; i < Object.keys(content).length; i++) {
      if(!(isNaN(Object.values(content)[i])) && Object.keys(content)[i] !== "tel"){
        content[`${Object.keys(content)[i]}`] = Number(Object.values(content)[i]);
      }
    }
    db.collection('product').insertOne(content, (err, result) => {
      db.close()
      if(!err){
        res.redirect(`/dashboard/${content.image}`)
      }else{
        res.render("error")
      }
    })
  })
});

module.exports = router;
