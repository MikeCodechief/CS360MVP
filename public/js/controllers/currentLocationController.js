airQualityApp.controller("CurrentLocationController", ['$scope', '$http',
    function ($scope, $http) {
    	$scope.loading = true;
        var airNowUrl = '/api/airdata/zipcode/84604'
        var lat
        var lnt

        var success = function(position){
        	lat = position.coords.latitude//user's latitude
        	lnt = position.coords.longitude //user's longitude
	        var url = "/api/airdata/coordinates?long=" + lnt + "&lat=" + lat;
	        $http.get(url)
	            .success(function (data) {
	                $scope.name = data[0].ReportingArea + ", " + data[0].StateCode
	                $scope.quality = data[0].Category.Name
	                $scope.loading = false
                    console.log($scope.quality);
                    
                    if ($scope.quality === "Good"){
                        $scope.description = "The current air quality is considered satisfactory, and air pollution poses little or no risk."
                    }
                    else if ($scope.quality === "Moderate"){
                        $scope.description = "The current air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."
                    }
                    else if ($scope.quality === "Unhealthy for Sensitive Groups") {
                        $scope.description = "In the current air quality members of sensitive groups may experience health effects. The general public is not likely to be affected."
                    }
                    else if ($scope.quality === "Unhealthy") {
                        $scope.description = "In the current air quality everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects."
                    }
                    else if ($scope.quality === "Very Unhealthy") {
                        $scope.description = "In the current air quality health warnings of emergency conditions. The entire population is more likely to be affected."
                    }
                    else {//($scope.quality === "Hazardous") {
                        $scope.description = "Health alert: everyone may experience more serious health effects."
                    }
	            })
        };
        var failure = function(error){
        	console.log(error);
        };
        
        //ask for user's gps coordinates

        //navigator.geolocation.getCurrentPosition();
        navigator.geolocation.getCurrentPosition(success, failure);

}])