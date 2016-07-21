var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FoodsSchema = new Schema({
  foodName:{
    type:String,
    unique:true,
    required:true
  },
  engName:{
    type:String,
    unique:true,
    required:true
  },
  image:{
    type:String,
    required:true
  },
  ingredient:{
    type:String,
    required:true
  },
  content:String
});
mongoose.model('Foods', FoodsSchema);
