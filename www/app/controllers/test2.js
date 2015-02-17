angular.module('test.controllers')
    .controller('Test2Ctrl', ['$scope', 'session', function ($scope, session) {
        $scope.message = 'Hello Halley73';
        $scope.clicked = function(message, amount) {
            console.log('CLICKED', message, amount);
            $scope.visible = !$scope.visible;
        }
        $scope.visible = false;
        $scope.formats = ['hh:mm:ss', 'hh|mm|ss', 'hh*mm*ss', 'hh^mm^ss']
        $scope.show = function (visible) {
            $scope.visible = visible ? !visible : visible;
        }

        $scope.showUser = function () {
            console.log(session.user);
        }
    }])
