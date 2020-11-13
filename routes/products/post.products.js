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
    post_date: new Date(pro.date_post).now,
    name: pro.name_pro,
    price: pro.price_pro.toLocaleString(),
    bid_date: new Date(pro.bid_date),
    image: pro.images_pro,
    description: pro.description
  }
  console.log(content)
  // mongo.connect(path, (err, db) => {
  //   req.body.image = req.file.path.split("public").join(".")
  //   for (var i = 0; i < Object.keys(req.body).length; i++) {
  //     if(!(isNaN(Object.values(req.body)[i])) && Object.keys(req.body)[i] !== "tel"){
  //       req.body[`${Object.keys(req.body)[i]}`] = Number(Object.values(req.body)[i]);
  //     }
  //   }
  //   db.collection(req.params.produce).insertOne(req.body, (err, result) => {
  //     db.close()
  //     console.log(result)
  //     if(!err){
  //       res.redirect(`/admin-set/${req.params.produce}`)
  //     }else{
  //       res.render("error")
  //     }
  //   })
  // })
});

module.exports = router;
