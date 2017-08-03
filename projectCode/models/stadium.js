// Stadiums
// require mongoose for DB
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StadiumSchema = new Schema({
  position: [Number],
  title: String
});

var Stadium = mongoose.model('Stadium', StadiumSchema);

module.exports = Stadium;
