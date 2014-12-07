airQualityApp.controller('navBarController', function ($scope, $modal, $location, $http) {
    $http.get('/auth/user').success(function(data){
        console.log(data)
        if(data.facebook){
            $scope.user = data.facebook   
        }
    })
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
        $http.get('/auth/logout').success(function(data){
            $scope.user = null  
            $location.path('/')
        })
        
        
    }
})