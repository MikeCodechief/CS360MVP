// config/passport.js

// load all the things we need
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('./../models/user')
var conf = require('./auth')

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Facebook profile is serialized
//   and deserialized.
passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
      User.findById(id, function(err, user) {
        done(null, user);
      });
});

passport.use(new FacebookStrategy({
        clientID: conf.facebook.clientID,
        clientSecret: conf.facebook.clientSecret,
        callbackURL: conf.facebook.callbackURL,
        profileFields: ['id', 'emails', 'displayName', 'photos', 'name', 'gender', 'profileUrl']
    },
    function (accessToken, refreshToken, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {

            User.findOne({
                'facebook.id': profile.id
            }, function (err, user) {
                if (err) {
                    return done(err)
                }

                if (user) {
                    //user exists
                    return done(err, user)
                } else {
                    //create user
                    var newUser = User()

                    newUser.facebook.id = profile.id
                    newUser.facebook.displayName = profile.displayName
                    newUser.facebook.firstName = profile.name.givenName
                    newUser.facebook.middleName = profile.name.middleName
                    newUser.facebook.lastName = profile.name.familyName
                    newUser.facebook.gender = profile.gender
                    newUser.facebook.profileUrl = profile.profileUrl
                    newUser.facebook.pictureUrl = (profile.photos[0].value || '')
                    newUser.facebook.email = (profile.emails[0].value || '')

                    newUser.save(function (err) {
                        return done(err, newUser)
                    })
                }
            })
        })
    }));