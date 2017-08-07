var mongoose = require("mongoose");
var Schema = mongoose.Schema;


//models/user.js
var PlayerSchema = new Schema({
  name: String,
});

var Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
