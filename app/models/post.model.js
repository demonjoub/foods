var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostsSchema = new Schema({
  post:{
    type:String,
    required:true
  },
  foodID:String,
  userID:String,
  created:{
    type:Date,
    default:Date.now
  }
});
mongoose.model('Posts', PostsSchema);
