angular.module('test.services')
    .service('session', ['$http', '$q', function ($http, $q) {
        var me = this;

        me.user = {
            username: 'Halley73',
            role: 'user'
        }

        me.getUserData = function (userId) {

            var dfd = $q.defer();

            $http.get('/user/' + userId)
                .success(function (data) {
                    me.user = data;
                    dfd.resolve(me.user);
                })
                .error(function (err) {
                    console.trace(err);
                    dfd.reject(err);
                })

            return dfd.promise;
        }
    }])
