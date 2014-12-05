airQualityApp.controller("CurrentLocationController", ['$scope', '$http',
    function ($scope, $http) {
        var airNowUrl = '/api/airdata/zipcode/84604'
        $http.get(airNowUrl)
            .success(function (data) {
                $scope.name = data[0].ReportingArea + ", " + data[0].StateCode
                $scope.quality = data[0].Category.Name
            })
}])