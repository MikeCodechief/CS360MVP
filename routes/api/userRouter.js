var express = require('express')
var request = require('request')
var airNowUrlBuilder = require('./../../services/airNowUrlBuilder')
var ensureAuthenticated = require('./../../services/ensureAuthenticated')
var Location = require('./../../models/location')

var router = express.Router()

router.use(ensureAuthenticated)

router.get('/', function(req, res){
    res.json(req.user)
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
                data[0]._id = loc._id
                return res.json(data)
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
                data[0]._id = loc._id
                return res.json(data)
            })
        } else {
            return res.json(data)  
        }
    })
})

router.get('/locations', function(req,res){
    Location.find({ user_id: req.user._id }, function(err, locations){
        if (err){
            res.json(err)   
        }
        else {
            res.json(locations)   
        }
    })
})

router.delete('/locations', function(req,res){
    Location.findOneAndRemove({ longitude: req.query.long, latitude: req.query.lat }, function (err, data) {
        if (err) { 
            return res.json(err)
        }
        else {
            return res.json({message: "successful removal", data: data})   
        }
        
    });
});


module.exports = router