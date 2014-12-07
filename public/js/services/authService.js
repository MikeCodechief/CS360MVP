airQualityApp.factory("Auth", function ($http) {
    var user;

    return {
        refresh: function () {
            $http.get('/auth/logout')
                .success(function (data) {
                    if (data.facebook){
                       user = data.facebook 
                    }
                    else {
                        user = null   
                    }
                })
                .failure(function(data) {
                    user = null   
            });
        },
        isLoggedIn: function () {
            return (user) ? user : false;
        },
        logout: function () {
            $http.get('/auth/logout')
                .success(function (data) {
                    user = null
                })
                .failure(function(data) {
                    user = null   
            });
        }
    }
})