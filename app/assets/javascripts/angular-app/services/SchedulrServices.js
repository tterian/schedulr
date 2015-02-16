var appServices = angular.module('appServices', ['ngResource']);

appServices.factory('User', ['$resource', function($resource) {
    return $resource('/users/:id', {id: '@id'});
}]);

appServices.factory('Order', ['$resource', function($resource) {
    return $resource('/users/:userId/orders/:id', {userId: '@userId', id: '@id'});
}]);