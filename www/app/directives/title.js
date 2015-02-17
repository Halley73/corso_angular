angular.module('test.directives')
    .directive('tsTitle', [function () {
        return {
            restrict: 'EA',
            link: function (scope, el, attrs) {
                el.text('Something');
            }
        }
    }])

