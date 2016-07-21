var mongoose = require('mongoose');
var config = require('./config');

module.exports = function() {

  mongoose.set('debug', config.debug);
  var db = mongoose.connect(config.uri);

  require('../app/models/user.model');
  require('../app/models/food.model');
  require('../app/models/post.model');
  require('../app/models/rank.model');

  return db;
}
