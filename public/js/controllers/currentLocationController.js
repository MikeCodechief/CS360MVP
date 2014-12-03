airQualityApp.controller("CurrentLocationController", ['$scope', '$http',
    function ($scope, $http) {
        var airNowUrl = 'http://localhost:1234/zipcode/84604'
        $http.get(airNowUrl)
            .success(function (data) {
                $scope.name = data[0].ReportingArea + ", " + data[0].StateCode
                $scope.quality = data[0].Category.Name
                console.log($scope.name, $scope.quality)
            })
}])