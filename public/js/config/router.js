airQualityApp.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
        $routeProvider.
        when('/locations', {
            templateUrl: 'views/locations.html',
        })
        .when('/', {
            templateUrl: 'views/home.html'
        })
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
}]);