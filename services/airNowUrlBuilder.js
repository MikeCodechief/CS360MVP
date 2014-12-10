var urlBuilder = {}

urlBuilder.zipcode = function(zipcode) {
    var airNowUrl = 'http://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=' 
    +  zipcode 
    + '&distance=25&API_KEY=78BA13EA-D252-489D-8C24-01045380F529'
    return airNowUrl
}
urlBuilder.latlong = function(latitude, longitude) {
    var airNowUrl = 'http://www.airnowapi.org/aq/observation/latLong/current/?format=application/json&zipCode=' 
	+"&latitude="+latitude+"1&longitude="+longitude
    + '&distance=25&API_KEY=78BA13EA-D252-489D-8C24-01045380F529'
    console.log(airNowUrl);
    return airNowUrl
}


module.exports = urlBuilder