angular.module('test.filters')
    .filter('think', [function () {
        return function (value) {
            return value.replace(/z/g, 'm');
        }
    }])

