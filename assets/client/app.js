var app42 = angular.module('test42cc', ['ngCookies', 'ngRoute', 'ngSanitize']);


// ====================================================================
//     Set support for django's {{ csrf_token }} security mechanism
// ====================================================================
app42.config( ['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);

// ====================================================================
//     Routes configuration
// ====================================================================
app42.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', { 
        templateUrl: '/static/hello/html/home.html', 
        controller: 'HomeController',
        controllerAs: 'ctrl',
        routeName: 'home',
        resolve: {
            isLoggedIn: ['$location', 'userState', function($location, userState) {
                if (userState.username !== '') {
                    $location.path('/tasks');
                    $location.replace();
                }
            }]
        },
    });

    // This is a dummy route for testing
    $routeProvider.when('/tasks', { 
        templateUrl: '/static/hello/html/dummy.html', 
        controller: 'DummyController',
        routeName: 'dummy',
    });

    $routeProvider.otherwise({redirectTo: '/'});

    // $locationProvider.html5Mode(true); 
}]);


// ====================================================================
//     Global MenuController
// ====================================================================
app42.controller('MenuController', ['$location', 'userState', function($location, userState) {
	var self = this;

    self.goHome = function() {
        if (userState.username === '') {
            $location.path('/');
            return;
        }
        $location.path('/tasks');
   };
}]);
