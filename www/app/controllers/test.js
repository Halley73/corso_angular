angular.module('test.controllers')
    .controller('TestCtrl', ['$scope', '$filter', '$http', '$q', '$location', '$interpolate', 'session', 'dateFilter', function ($scope, $filter, $http, $q, $location, $interpolate, session, dateFilter) {
        $scope.message = 'Hello World';
        $scope.today = dateFilter(new Date(), 'dd/MM/yyyy');
        $scope.today2 = new Date();
        $scope.today3 = $filter('date')(new Date(), 'dd/MM/yyyy');
        $scope.amount = $filter('currency')(3050.235, '€', 2);
        $scope.obj = {
            prop: 'stringa',
            arr: [10, 20, 'stringhe'],
            nested: {
                a: 10,
                b: 'ciao'
            }
        }
        $scope.list = [
            { name: 'Pluto', age: 150 },
            { name: 'Topolino', age: 12 },
            { name: 'Paperino', age: 56 },
            { name: 'Minnie', age: 70 },
            { name: 'Quo', age: 15 },
        ]

        $http.get('/developers.json')
            .success(function (response) {
                console.log(response);
            })
            .error(function (response) {
                console.log(response);
            });

        function asyncFn() {
            console.log('asyncFn');

            var dfd = $q.defer();

            setTimeout(function () {
                dfd.resolve(10);
            }, 1000);

            return dfd.promise;
        }

        function async2Fn(data) {
            console.log('async2Fn', data);

            var dfd = $q.defer();

            setTimeout(function () {
                dfd.resolve(20);
            }, 3000);

            return dfd.promise;
        }

        function async3Fn(data) {
            console.log('async3Fn', data);

            var dfd = $q.defer();

            setTimeout(function () {
                dfd.resolve(20);
            }, 2000);

            return dfd.promise;
        }

        asyncFn()
            .then(async2Fn)
            .then(async3Fn)
            .then(function (data) {
                console.log('TERMINATA!', data);
            })
            .catch(function (err) {
                console.trace(err);
            });

        console.log($location.url(), $location.host(), $location.port());

        var data = {
            title : 'pippo'
        }

        var data2 = {
            title : 'pluto'
        }

        var data3 = {
            title : 'paperino'
        }

        var tpl = 'Title: {{title}}';
        var compiler = $interpolate(tpl);

        console.log(compiler(data));
        console.log(compiler(data2));
        console.log(compiler(data3));

        console.log(session.user);

        setTimeout(function () {
            session.user = {
                username: 'pippo',
                role: 'admin'
            }
        }, 2000);

        session.getUserData(10)
            .then(function (user) {

            }, function (err) {

            });
    }]);
