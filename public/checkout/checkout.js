'use strict';

var checkout = angular.module('checkout', ['ngRoute']);

checkout.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/checkout', {
        templateUrl: 'checkout/checkout.html',
        controller: 'CheckoutCtrl'
    });
}]);

checkout.controller('CheckoutCtrl', ['$scope', function($scope) {
    
}]);
