var app = angular.module('shoppingCart', [
    'ngRoute',
    'cart',
    'checkout'
]);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/cart'
    });
}]);
