var express = require('express')
var request = require('request')
var http = require('http');
var airNowUrlBuilder = require('./../../services/airNowUrlBuilder')

var router = express.Router()

router.get("/zipcode/:zipcode", function (req, res) {
    var airNowUrl = airNowUrlBuilder.zipcode(req.params.zipcode)
    request.get({
        url: airNowUrl,
        json: true
    }, function(e, r, data){
        return res.json(data)
    })
})

//get: /api/airdata/currentLocation
router.get('/coordinates', function(req, res){
    var longitude = req.query.long
    var latitutde = req.query.lat

    var airNowUrl = airNowUrlBuilder.latlong(latitutde, longitude)
    request.get({
        url: airNowUrl,
        json: true
    }, function(e, r, data){
        return res.json(data)
    })

    //res.send(position.coords.latitutde + " " + position.coords.longitude);
})

module.exports = router