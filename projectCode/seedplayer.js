var db = require('./models');

var player_list = [{
    name: "ALEX",
    age: 23
  },
  {
    name: "STEF",
    age: 24
  }
];

// removing all players
db.Player.remove({}, function(err, stadium) {
  if (err) {
    console.log('Error is: ', err);
  } else {
    console.log('Removed All players');
    // creating all new stadiums
    db.Player.create(player_list, function(err, players) {
      if (err) {
        return console.log('err: ', err);
      } else {
        console.log("created", players.length, "players");
        process.exit();
      }
    });
  }
});
