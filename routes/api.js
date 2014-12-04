var express = require('express')
var request = require('request')

var router = express.Router()

router.get("/zipcode/:zipcode", function (req, res) {
    var airNowUrl = 'http://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=' 
        +  req.params.zipcode 
        + '&distance=25&API_KEY=78BA13EA-D252-489D-8C24-01045380F529&callback=JSON_CALLBACK'
    request.get({
        url: airNowUrl,
        json: true
    }, function(e, r, data){
        return res.json(data)
    })
})


router.get('/getAirQualityAtCurrentLocation', function(req, res){
    res.send('not implemented')
})

module.exports = router