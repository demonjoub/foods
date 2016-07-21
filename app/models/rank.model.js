var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RanksSchema = new Schema({
  FoodID:String,
  Ranking:{}
});
mongoose.model('Ranks', RanksSchema);
