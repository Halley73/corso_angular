angular.module('test.filters')
    .filter('abbiocco', [function () {
        return function (value, counter, wakeUp) {
            counter = counter || 10;

            var zCounter = '';

            for (var i = 0; i < counter; i++) zCounter += 'z';

            if (wakeUp) zCounter += ' .... uhm?';

            return value + ' ' + zCounter;
        }
    }])

