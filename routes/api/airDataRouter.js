var express = require('express')
var request = require('request')
var airNowUrlBuilder = require('./../../services/airNowUrlBuilder')
var ensureAuthenticated = require('./../../services/ensureAuthenticated')
var Location = require('./../../models/location')

var router = express.Router()

router.get("/zipcode/:zipcode", function (req, res) {
    var airNowUrl = airNowUrlBuilder.zipcode(req.params.zipcode)
    request.get({
        url: airNowUrl,
        json: true
    }, function (e, r, data) {
        return res.json(data)
    })
})

//get: /api/airdata/currentLocation
router.get('/coordinates', function (req, res) {
    var longitude = req.query.long
    var latitutde = req.query.lat

    var airNowUrl = airNowUrlBuilder.latlong(latitutde, longitude)
    request.get({
        url: airNowUrl,
        json: true
    }, function (e, r, data) {
        return res.json(data)
    })
})


router.use(ensureAuthenticated)

router.get('/add/coordinates', function (req, res) {
    var longitude = req.query.long
    var latitutde = req.query.lat

    var airNowUrl = airNowUrlBuilder.latlong(latitutde, longitude)
    request.get({
        url: airNowUrl,
        json: true
    }, function (e, r, data) {
        if (data[0]) {
            var long = data[0].Longitude
            var lat = data[0].Latitude
            
            var newLocation = new Location()
            newLocation.longitude = long
            newLocation.latitude = lat
            newLocation.user_id = req.user._id
            newLocation.save(function(err, loc){
                if (err) { return res.json(err) }
                
                return res.json(loc, data)
            })
        } else {
            return res.json(data)
        }
    })
})

router.get("/add/zipcode/:zipcode", function (req, res) {
    var airNowUrl = airNowUrlBuilder.zipcode(req.params.zipcode)
    request.get({
        url: airNowUrl,
        json: true
    }, function (e, r, data) {
        if (data[0]){
            var long = data[0].Longitude
            var lat = data[0].Latitude
            
            var newLocation = new Location()
            newLocation.longitude = long
            newLocation.latitude = lat
            newLocation.user_id = req.user._id
            newLocation.save(function(err, loc){
                if (err) { return res.json(err) }
                
                return res.json(loc, data)
            })
        } else {
            return res.json(data)  
        }
    })
})


module.exports = router