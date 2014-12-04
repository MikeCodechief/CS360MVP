airQualityApp.factory("Auth", function($http){
  $http.get("")

  return{
      getLocation : function(){
          return curLocation;
      },
      isLoggedIn : function(){
          return(user)? user : false;
      },
      logout : function(){
        user = null
      }
    }
  })
})
