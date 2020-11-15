const express = require('express');
const router = express.Router();
const mongo = require("mongodb");
const pathMongo = require("../path.mongodb");
const multer = require("multer")
const produceImage = require('../config/produce.images');
const storage = multer.diskStorage(produceImage)
const upload = multer( { storage: storage } );

/* POST products page. */
router.post('/', upload.single('images_pro'), (req, res, next) => {
  var pro = req.body
  var content = {
    post_date: new Date(Date.now(pro.date_post)),
    name: pro.name_pro,
    price: pro.price_pro,
    bid_date: new Date(pro.bid_date),
    image: pro.images_pro,
    description: pro.description
  }
  mongo.connect(pathMongo, (err, db) => {
    content.image = req.file.path.split("public").join(".")
    for (var i = 0; i < Object.keys(content).length; i++) {
      if(!(isNaN(Object.values(content)[i])) && Object.keys(content)[i] !== "tel"){
        content[`${Object.keys(content)[i]}`] = Number(Object.values(content)[i]);
      }
    }
    db.collection('products').insertOne(content, (err, result) => {
      if(!err){
        res.redirect('/productsAll')
      }else{
        res.render("Something went wrong!")
      }
    })
    db.close()
  })
});

module.exports = router;
