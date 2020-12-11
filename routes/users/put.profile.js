const express = require('express');
const router = express.Router();
const mongo = require("mongodb");
const pathMongo = require("../path.mongodb");
const ObjectId = require('mongodb').ObjectId;
const multer = require("multer")
const avatarImage = require('../config/avatar.images');
const storage = multer.diskStorage(avatarImage)
const upload = multer({ storage: storage });

/* UPDATE account POST method. */
router.post('/', upload.single('avatar'), (req, res, next) => {
  let session = req.session.user
  let id = session.id
  let account = req.body
  let profile = {
    avatar: account.avatar,
    gender: account.gender,
    birthday: account.birthday,
  }
  console.log(req.files)
  // mongo.connect(pathMongo, (err, db) => {
  //   profile.avatar = req.file.path.split("public").join(".")
  //   for (var i = 0; i < Object.keys(profile).length; i++) {
  //     if(!(isNaN(Object.values(profile)[i])) && Object.keys(profile)[i] !== "tel"){
  //       profile[`${Object.keys(profile)[i]}`] = Number(Object.values(profile)[i]);
  //     }
  //   }
  //   db.collection('users').findOne({_id: ObjectId(id)}, (err, data) => {
  //     db.collection('users').update({_id: ObjectId(id)}, { $set: profile }, (err, result) => {
  //       db.close();
  //       if (!err) {
  //         res.render('users/profile')
  //       } else {
  //         res.redirect(req.get('referer'))
  //       }
  //     })
  //   })
  // })
});

module.exports = router;