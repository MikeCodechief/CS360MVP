airQualityApp.controller("CurrentLocationController", ['$scope', '$http', function($scope, $http){

  $http.get('http://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=84604&distance=25&API_KEY=78BA13EA-D252-489D-8C24-01045380F529')
    .success(function(data){
      $scope.name = data[0].ReportingArea + ", " + data[0].StateCode
      $scope.quality = data[0].Category.Name
      console.log($scope.name, $scope.quality)
    })
}])
