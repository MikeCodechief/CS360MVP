// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebook' : {
        'clientID'      : '2498990773', // your App ID
        'clientSecret'  : '8d4c87f6227438c61acb413f8af33a5c', // your App Secret
        'callbackURL'   : 'www.google.com'
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