angular.module('test.controllers')
    .controller('MainCtrl', ['$scope', '$routeParams', '$route', function ($scope, $routeParams, $route) {
        console.log($routeParams);

        $scope.params = $routeParams;
    }])
