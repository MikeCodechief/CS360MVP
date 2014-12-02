airQualityApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/locations', {
        templateUrl: 'views/locations.html',
      })
      .when('/', {
        templateUrl: 'views/home.html'
      })
}]);
