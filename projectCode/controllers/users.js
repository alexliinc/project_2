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
  db.Stadium.create({
    title: "POSTED"
  }, function(err, stadium) {
    console.log(stadium);
    response.json(stadium);
  });
  // this code will add Staiumd to a user
  // db.Stadium.findOne({
  //   title: "Arizona Diamondbacks" //req.body.stadium
  // }, function(err, stadium) {
  //   db.User.stadiums.push(stadium);
  //   newBook.save(function(err, book) {
  //     if (err) {
  //       return console.log("create error: " + err);
  //     }
  //     console.log("created ", book.title);
  //     res.json(book);
  //   });
  // });
}


module.exports = {
  getLogin: getLogin,
  postLogin: postLogin,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  userProfile: userProfile,
  addStadium: addStadium
}
