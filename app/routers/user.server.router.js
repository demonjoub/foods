var user = require('../controllers/user.server.controller');
// upload images
var multer  = require('multer');
var crypto = require('crypto');
var mime = require('mime');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      console.log(file.mimetype);
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
    });
  }
});
var upload = multer({ storage: storage })
// end





module.exports = function(app) {
  app.route('/signup')
		.get(user.signup)
    .post(user.create);

  app.route('/upload')
    .get(user.renderUpload)
    .post(upload.single('images'), user.uploader);

  app.get('/hello', user.renderHello);
}
