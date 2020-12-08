var index = 0;
module.exports = {
  destination: `public/uploads/products`,
  filename: function ( req, file, cb ) {
    let typeFile = file.originalname.split(".")[file.originalname.split(".").length-1];
    cb( null, `${index++}_${req.body['post_date']}.jpg`);
  }
}