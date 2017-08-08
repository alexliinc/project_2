var mongoose = require("mongoose");
var Schema = mongoose.Schema;


//models/player.js
var PlayerSchema = new Schema({
  name: String,
  age: Number
});

var Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
