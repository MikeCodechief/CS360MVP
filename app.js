var express = require('express')
var request = require('request')

var app = express()

app.use(express.static(__dirname + '/public'));

app.get("/zipcode/:zipcode", function (req, res) {
    var airNowUrl = 'http://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=' 
        +  req.params.zipcode 
        + '&distance=25&API_KEY=78BA13EA-D252-489D-8C24-01045380F529&callback=JSON_CALLBACK'
    request.get({
        url: airNowUrl,
        json: true
    }, function(e, r, data){
        return res.json(data)
        
    })
    
});

app.get("/getAirQualityDataForCurrentLocation", function(req, res){
    //where the user is located
    
    //get air quality data for that location
    
    //send json
})

app.get("/*", function (req, res) {
    res.sendFile(__dirname + "/public/index.html")
});

app.listen(1234)