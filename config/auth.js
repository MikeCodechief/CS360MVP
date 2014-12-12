// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebook' : {
        'clientID'      : '2498990773', // your App ID
        'clientSecret'  : 'ceee3f3fb7bd5abb3fddca8ed71d441f', // your App Secret
        'callbackURL'   : 'http://frozen-anchorage-4634.herokuapp.com'
    },

    'twitter' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:1234/auth/twitter/callback'
    },

    'google' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:1234/auth/google/callback'
    }

};