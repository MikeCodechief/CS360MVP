airQualityApp.controller('loginCtrl', [ '$scope', 'Auth', function ($scope, Auth) {
  //submit
  $scope.login = function () {
    // Ask to the server, do your job and THEN set the user
    var user = {}
    user.name = "Joey"
    Auth.setUser(user); //Update the state of the user in the app
  };
}])
