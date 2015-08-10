var app = angular.module('shoppingCart', [
    'ngRoute',
    'cart'
]);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/cart'
    });
}]);
