airQualityApp.controller("LocationsController", ['$scope', '$http', function($scope, $http){

  $scope.locations = [];

  console.log("locatins controller")

  $scope.add = function() {
    if ($scope.newLocation){
      var tmp = {
        name: $scope.newLocation,
        quality: "GOOD"
      }
      $scope.locations.push(tmp)
    }

    $scope.newLocation = "";
  }

  $scope.add(3455)
  $scope.add(234234)

  $scope.remove = function(i) {
    $scope.locations.splice(i, 1);
  }


}])
