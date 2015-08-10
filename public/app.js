var app = angular.module('shoppingCart', [
    'ngRoute',
    'cart',
    'checkout'
]);
app.config(function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/cart'
    });
});
