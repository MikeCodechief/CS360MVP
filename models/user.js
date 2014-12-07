// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({
    local: {
        email: String,
        password: String,
    },
    facebook: {
        id: String,
        displayName: String,
        firstName: String,
        middleName: String,
        lastName: String,
        gender: String,
        profileUrl: String,
        pictureUrl: String,
        email: String
    },
    locations: {
        location: String   
    }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);