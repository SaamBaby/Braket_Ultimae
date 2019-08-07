const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/users');


// 2 - Handle Login Form Submission
router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/',
    successRedirect: '/tournaments'
  })
);


// 4 - Handle Register Form Submission
router.post('/register', (req, res) => {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    function(err, account) {
      if (err) {
        console.log(err);
       // return res.render('register', { account: account });
      }

      passport.authenticate('local')(req, res, function() {
        res.redirect('/tournaments');
      });
    }
  );
});
// 5 - Log out
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    res.redirect('/login');
  });
});
// router.get('/auth/github',
//   passport.authenticate('github'));
  
  
// router.get('/auth/github/callback', 
//   passport.authenticate('github', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });


module.exports = router;
