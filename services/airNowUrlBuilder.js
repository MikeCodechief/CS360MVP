var urlBuilder = {}

urlBuilder.zipcode = function(zipcode) {
    var airNowUrl = 'http://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=' 
    +  zipcode 
    + '&distance=25&API_KEY=78BA13EA-D252-489D-8C24-01045380F529'
    return airNowUrl
}

module.exports = urlBuilder