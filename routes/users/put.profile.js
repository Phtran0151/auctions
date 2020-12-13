const express = require('express');
const router = express.Router();
const mongo = require("mongodb");
const pathMongo = require("../path.mongodb");
const multer = require("multer")
const ObjectId = require('mongodb').ObjectId;
const avatarImage = require('../config/avatar.images');
const storage = multer.diskStorage(avatarImage)
const upload = multer({ storage: storage });

/* UPDATE account POST method. */
router.post('/', upload.single('avatar'), (req, res, next) => {
  let session = req.session.user
  let id = session.id
  let profile = {
    avatar: req.body.avatar,
    gender: req.body.gender,
    birthday: new Date(req.body.birthday),
  }
  mongo.connect(pathMongo, (err, db) => {
    profile.avatar = req.file.path.split("public").join("..")
    for (let i = 0; i < Object.keys(profile).length; i++) {
      if(!(isNaN(Object.values(profile)[i])) && Object.keys(profile)[i] !== "tel"){
        profile[`${Object.keys(profile)[i]}`] = Number(Object.values(profile)[i]);
      }
    }
    db.collection('users').update({_id: ObjectId(id)},
      { $set: profile },
      { avatar: { $exists: true, $nin: profile.avatar } },
      (err, result) => {
      db.close();
      if (!err) {
        res.render('users/profile')
      } else {
        res.redirect(req.get('referer'))
      }
    })
  })
});

module.exports = router;