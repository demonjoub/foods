var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username:{
    type:String,
    trim:true,
    required:'username is required',
    unique:true
  },
  firstname:{
    type:String,
    trim:true
  },
  lastname:{
    type:String,
    trim:true
  },
  email:{
    type:String,
    index:true,
    trim:true,
    match: /.+\@.+\.+/
  },
  salt:String,
  provider:{
    type:String,
    required:true,
  },
  providerID:String,
  providerData:{},
  favorite:{},
  created:{
    type:Date,
    default:Date.now
  }
});

mongoose.model('User', UserSchema);
