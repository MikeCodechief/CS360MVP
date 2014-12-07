var express = require('express')
var path = require('path')
var passport = require('passport')
var ensureAuthenticaated = require('./../services/ensureAuthenticated')

var router = express.Router()

//auth stuff goes here..

// GET /auth/facebook
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Facebook authentication will involve
//   redirecting the user to facebook.com.  After authorization, Facebook will
//   redirect the user back to this application at /auth/facebook/callback
router.get('/auth/facebook',
    passport.authenticate('facebook'),
    function (req, res) {
        // The request will be redirected to Facebook for authentication, so this
        // function will not be called.
    });

router.get('/facebook', passport.authenticate('facebook', {
    scope: ['email']
}), function (req, res) {})

// GET /auth/facebook/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/facebook/callback',
    passport.authenticate('facebook', {
        failureRedirect: '/fail/fail/fail'
    }),
    function (req, res) {
        res.redirect('/locations');
    });

router.get('/logout', function (req, res) {
    req.logout();
    res.send('logged out')
});


//must be authenticated for the below routes
router.use(ensureAuthenticaated)

router.get('/user', function (req, res) {
    res.json(req.user)
})


module.exports = router