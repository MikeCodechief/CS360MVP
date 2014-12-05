airQualityApp.controller('loginModalController', function ($scope, $modalInstance, $location, data) {

    $scope.input = {}
    
    $scope.ok = function () {
        $modalInstance.close($scope.input);
        $location.path('/locations')
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
})