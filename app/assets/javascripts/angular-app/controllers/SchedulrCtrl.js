var appControllers = angular.module('appControllers', []);

appControllers.controller('UserIndexController', ['$scope', '$location', 'User', function($scope, $location, User) {
    $scope.users = User.query();
    $scope.usersProp = '-created_at';
    $scope.usersPriority = '1';

    $scope.destroy = function(index) {
        User.remove({id: $scope.users[index].id}, function() {
            $scope.users.splice(index, 1);
        });
    }

    $scope.save = function() {
        var user = new User($scope.user);
        user.$save(function() {
            $scope.users.unshift(user);
            $scope.name = $scope.sex = $scope.priority = ""

            $location.path('/');
        }, function(response) {
            $scope.errors = response.data.errors;
        });
    }

}]);


appControllers.controller('UserShowController', ['$scope', 'User', 'Order', '$routeParams', function($scope, User, Order, $routeParams) {
    $scope.user = User.get({id: $routeParams.id});
    $scope.orders = Order.query({userId: $routeParams.id});
    $scope.ordersProp = '-created_at';

    $scope.save = function() {
        var order = new Order({title: $scope.title, body: $scope.body, status: "Placed", userId: $routeParams.id, user_id: $routeParams.id});
        order.$save(function(response) {
            $scope.orders.unshift(order);
            $scope.title = $scope.body = $scope.status = ""

        }, function(response) {

            $scope.errors = response.data.errors;
        });
    }

    $scope.destroy = function(index) {
        Order.remove({userId: $routeParams.id, id: $scope.orders[index].id}, function() {
            $scope.orders.splice(index, 1);
        });
    }


}]);