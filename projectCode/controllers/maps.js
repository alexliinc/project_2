var db = require('../models');

// GET /getAll Stadiums
function getAll(request, response) {
  db.Stadium.find({}, function(err, stadiums) {
    response.json(stadiums);
  });
}

function favStadium(request, response) {
  response.send('helo');
}

module.exports = {
  getAll: getAll,
  favStadium: favStadium
}
