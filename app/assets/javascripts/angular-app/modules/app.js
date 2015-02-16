var app = angular.module('app', [
	'ngResource', 
	'ngRoute',
	'appControllers', 
	'appServices'
	]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/',          {
            	controller: 'UserIndexController',    
            	templateUrl: 'assets/angular-app/templates/index.html' 
            })
            .when('/user/:id', {
            	controller: 'UserShowController',     
            	templateUrl: 'assets/angular-app/templates/show.html' 
            })
            .otherwise({redirectTo: '/'});
}]);