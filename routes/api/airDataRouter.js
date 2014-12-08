var express = require('express')
var request = require('request')
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


router.get('/currentLocation', function(req, res){
    res.send('not implemented')
})

module.exports = router