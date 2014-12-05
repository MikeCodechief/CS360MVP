airQualityApp.controller('navBarController', function ($scope, $modal, $location, Auth) {
    
    $scope.openLoginModal = function () {
        var modalInstance = $modal.open({
            templateUrl: "views/module_views/login.html",
            controller: 'loginModalController',
            resolve: {
                data: function () {
                    return "ooohhhhhyaaaaa";
                }
            }
        })

        modalInstance.result.then(function (dataFromModal) {
            $scope.user = dataFromModal
            
        }, function () {
            console.log('dismissed!')
        });
    }

    $scope.logout = function() {
        $scope.user = null
        $location.path('/')
        
    }
})