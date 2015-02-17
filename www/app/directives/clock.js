angular.module('test.directives')
    .directive('tsClock', ['$interval', function($interval) {
        return {
            restrict: 'E',
            scope: {
                format: '='
            },
            template: '<div>{{time | date: format}}</div>',
            link: function (scope, el, attrs) {
                scope.time = new Date();

                $interval(function () {
                    scope.time = new Date();
                }, 1000);
            }
        }
    }])

