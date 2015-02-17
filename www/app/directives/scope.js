angular.module('test.directives')
    .directive('tsScope', [function () {
        return {
            restrict: 'E',
            scope: {
                title: '@',
                title2: '=',
                visible: '=',
                show: '&'
            },
            templateUrl: 'templates/scope.html'
//            link: function (scope, el, attrs) {
//                scope.show = function (visible) {
//                    scope.visible = visible ? !visible : visible;
//                }
//            }
        }
    }])
