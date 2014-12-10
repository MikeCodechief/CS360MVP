airQualityApp.controller("CurrentLocationController", ['$scope', '$http',
    function ($scope, $http) {
    	$scope.loading = true;
        var airNowUrl = '/api/airdata/zipcode/84604'
        var lat
        var lnt

        var success = function(position){
        	lat = position.coords.latitude//user's latitude
        	lnt = position.coords.longitude //user's longitude
	        console.log(lat)
	        console.log(lnt)
	        var url = "/api/airdata/coordinates?long=" + lnt + "&lat=" + lat;
	        $http.get(url)
	            .success(function (data) {
	                $scope.name = data[0].ReportingArea + ", " + data[0].StateCode
	                $scope.quality = data[0].Category.Name
	                $scope.loading = false;
	            })
        };
        var failure = function(error){
        	console.log(error);
        };
        
        //ask for user's gps coordinates

        //navigator.geolocation.getCurrentPosition();
        navigator.geolocation.getCurrentPosition(success, failure);

}])