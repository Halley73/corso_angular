angular.module('test.controllers')
    .controller('MainCtrl', ['$scope', '$state', 'LIMIT_CALL_MIN', /*'$routeParams', '$route'*/  function ($scope, $state, LIMIT_CALL_MIN /*$routeParams, $route*/) {
        //console.log($routeParams);

        //$scope.params = $routeParams;
        console.log($state.params);
        $scope.params = $state.params;

        console.log('MAIN CTRL', LIMIT_CALL_MIN);

        $scope.showUser = function () {
            $state.go('home.user');
        };

        $scope.gridOptions = {
            data: [
                { name: 'Paperino', age: 100 },
                { name: 'Pluto', age: 1000 },
                { name: 'Pippo', age: 10 },
                { name: 'Qui', age: 26 },
                { name: 'Quo', age: 174 }
            ]
        }
    }]);
