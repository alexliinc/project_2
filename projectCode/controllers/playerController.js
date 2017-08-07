var db = require('../models');

// GET /showAllPlayers
function renderPlayer(request, response) {
  response.render('player.ejs');
  // db.Player.find({}, function(err, stadiums) {
  //   response.json(stadiums);
  // });
}

// GET /showAllPlayers
function showAllPlayers(request, response) {
  db.Player.find({}, function(err, players) {
    response.json(players);
  });
}

// POST /addNewPlayer
function addNewPlayer(request, response) {
  response.send("yeah");
}

// PUT /updatePlayer
function updatePlayer(request, response) {
  response.send("yeah");
}

// DELETE /removePlayer
function removePlayer(request, response) {
  response.send("yeah");
}


module.exports = {
  renderPlayer: renderPlayer,
  addNewPlayer: addNewPlayer,
  updatePlayer: updatePlayer,
  removePlayer: removePlayer,
  showAllPlayers: showAllPlayers
}
