// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebook' : {
        'clientID'      : '573069066172383', // your App ID
        'clientSecret'  : 'e9f9cff833f7215409ddc678ac4770c4', // your App Secret
        'callbackURL'   : 'http://localhost:1234/auth/facebook/callback'
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