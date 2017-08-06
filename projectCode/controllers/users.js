const passport = require('passport');
const db = require('../models');

// GET /signup
function getSignup(request, response) {
  response.render('signup.ejs', {
    message: request.flash('signupMessage')
  });
}

// POST /signup
function postSignup(request, response, next) {
  // Save a new User
  let signupStrategy = passport.authenticate('local-signup', {
    successRedirect: '/userProfile',
    failureRedirect: '/signup',
    failureFlash: true
  });

  return signupStrategy(request, response, next);
}

// GET /login
function getLogin(request, response) {
  response.render('login.ejs', {
    message: request.flash('loginMessage')
  });
}

// POST /login
function postLogin(request, response, next) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect: '/userProfile',
    failureRedirect: '/login',
    failureFlash: true
  });

  return loginProperty(request, response, next);
}

// GET /logout
function getLogout(request, response) {
  request.logout();
  response.redirect('/');
}

// Restricted page
function userProfile(request, response) {
  response.render('user_profile.ejs');
}

function addStadium(request, response) {
  // this code will add stadiums to a user
  //console.log(request.user._id);
  //console.log(request.user.local.email);
  //console.log(request.body);
  console.log(request);

  db.User.findOne({
    _id: request.user._id
  }, function(err, user) {
    //user.stadiums.push("5984d5c2421b0b0ece6a158e");
    //user.save();
    response.json(user);
  });
}

function vistedStadium(request, response) {
  console.log('userFavorites');
  console.log(request.body);
  db.User.findOne({
    _id: request.user._id
  }, function(err, user) {
    user.stadiums.push(request.body.stadiumId);
    user.save();
    response.json(user);
  });
}

function userVistedStadium(request, response) {
  console.log('userFavorites');
  console.log(request.body);
  db.User.findOne({
    _id: request.user._id
  }, function(err, user) {
    user.stadiums.push(request.body.stadiumId);
    user.save();
    response.json(user);
  });
}


module.exports = {
  getLogin: getLogin,
  postLogin: postLogin,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  userProfile: userProfile,
  addStadium: addStadium,
  vistedStadium: vistedStadium,
  userVistedStadium: userVistedStadium
}
