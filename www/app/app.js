angular
    .module('test', [
        //'ngRoute',
        'ui.grid',
        'ui.router',
        'test.controllers',
        'test.directives',
        'test.filters',
        'test.services'
    ])
    .config([/*'$routeProvider',*/'$stateProvider', '$urlRouterProvider', '$httpProvider', 'LIMIT_CALL_MIN', function (/*$routeProvider*/ $stateProvider, $urlRouterProvider, $httpProvider, LIMIT_CALL_MIN) {
        $httpProvider.defaults.headers.common['Accept'] = 'application/xml';

        console.log('CONFIG', LIMIT_CALL_MIN);

        $stateProvider
            .state('home', {
                url: '/:userId/:repoId',
                templateUrl: 'templates/main.html',
                controller: 'MainCtrl'
            })
            .state('home.user', {
                url: '/user',
                templateUrl: 'templates/main.user.html'
            });

        $urlRouterProvider.otherwise('/404');

        /*$routeProvider
            .when('/:userId/:repoId', {
                templateUrl: 'templates/main.html',
                controller: 'MainCtrl'
            })
            .when('/404', {
                templateUrl: 'templates/404.html'
            })
            .otherwise('/404');*/
    }])
    .constant('LIMIT_CALL_MAX', 10)
    .constant('LIMIT_CALL_MIN', 'MIN')
    .constant('CONFIG', {
        url: 'http://...',
        port: 12345
    })
    .run(['$http', 'LIMIT_CALL_MIN', function ($http, LIMIT_CALL_MIN) {
        console.log('Hello world!');
        $http.get('/asd?');

        console.log(LIMIT_CALL_MIN);
        LIMIT_CALL_MIN = 100;
        console.log(LIMIT_CALL_MIN);
    }]);