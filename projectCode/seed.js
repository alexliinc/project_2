// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// position[latitude, longitude]
// LatLng(39.755872, -104.994172),

var db = require('./models');

var stadiums_list = [{
    position: [33.445278, -112.066667],
    title: "Arizona Diamondbacks"
  },
  {
    position: [33.735206, -84.389642],
    title: "Atlanta Braves"
  },
  {
    position: [39.283642, -76.621803],
    title: "Baltimore Orioles"
  },
  {
    position: [42.34635, -71.097611],
    title: "Boston Red Sox"
  },
  {
    position: [41.948036, -87.655681],
    title: "Chicago Cubs"
  },
  {
    position: [41.830081, -87.634047],
    title: "Chicago White Sox"
  },
  {
    position: [39.097392, -84.506858],
    title: "Cincinnati Reds"
  },
  {
    position: [41.495703, -81.685283],
    title: "Cleveland Indians"
  },
  {
    position: [39.755872, -104.994172],
    title: "Colorado Rockies"
  },
  {
    position: [42.339281, -83.048867],
    title: "Detroit Tigers"
  },
  {
    position: [29.756844, -95.355417],
    title: "Houston Astros"
  },
  {
    position: [39.051358, -94.480703],
    title: "Kansas City Royals"
  },
  {
    position: [33.800031, -117.883014],
    title: "Los Angeles Angels of Anaheim"
  },
  {
    position: [34.073561, -118.240122],
    title: "Los Angeles Dodgers"
  },
  {
    position: [25.778056, -80.219722],
    title: "Miami Marlins"
  },
  {
    position: [43.02835, -87.971125],
    title: "Milwaukee Brewers"
  },
  {
    position: [44.981667, -93.278333],
    title: "Minnesota Twins"
  },
  {
    position: [40.756867, -73.845530],
    title: "New York Mets"
  },
  {
    position: [40.82916, -73.926389],
    title: "New York Yankees"
  },
  {
    position: [37.7516135026005, -122.20050930976867],
    title: "Oakland Athletics"
  },
  {
    position: [39.905733, -75.166525],
    title: "Philadelphia Phillies"
  },
  {
    position: [40.446986, -80.005994],
    title: "Pittsburgh Pirates"
  },
  {
    position: [32.707467, -117.156989],
    title: "San Diego Padres"
  },
  {
    position: [37.778372, -122.389689],
    title: "San Francisco Giants"
  },
  {
    position: [47.591392, -122.331861],
    title: "Seattle Mariners"
  },
  {
    position: [38.6225, -90.193056],
    title: "St. Louis Cardinals"
  },
  {
    position: [27.768317, -82.653381],
    title: "Tampa Bay Rays"
  },
  {
    position: [32.751461, -97.082847],
    title: "Texas Rangers"
  },
  {
    position: [43.6413, -79.389214],
    title: "Toronto Blue Jays"
  },
  {
    position: [38.872778, -77.0075],
    title: "Washington Nationals"
  }
];



// removing all Stadium
db.Stadium.remove({}, function(err, stadium) {
  if (err) {
    console.log('Error is: ', err);
  } else {
    console.log('Removed All Stadium');
    // creating all new stadiums
    db.Stadium.create(stadiums_list, function(err, stadiums) {
      if (err) {
        return console.log('err: ', err);
      } else {
        console.log("created", stadiums.length, "stadiums");
        process.exit();
      }
    });
  }
});
