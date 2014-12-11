// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var airDataLocation = mongoose.Schema({
    user_id: String,
    longitude: String,
    latitude: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('AirDataLocation', airDataLocation);