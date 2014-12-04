airQualityApp.controller("LocationsController", ['$scope', '$http',
    function ($scope, $http) {

        $scope.locations = [];

        console.log("locatins controller")

        $scope.add = function () {
            if ($scope.newLocation) {
                var url = "http://localhost:1234/api/airdata/zipcode/" + $scope.newLocation
                $http.get(url)
                    .success(function(data){
                        var name = data[0].ReportingArea + ", " + data[0].StateCode
                        var quality = data[0].Category.Name
                        
                        var tmp = {
                            name: name,
                            quality: quality
                        }
                        $scope.locations.push(tmp)
                        
                })
            }
            $scope.newLocation = "";
            
        }

        $scope.add(3455)
        $scope.add(234234)

        $scope.remove = function (i) {
            $scope.locations.splice(i, 1);
        }


}])