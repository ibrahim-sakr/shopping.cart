'use strict';

var checkout = angular.module('checkout', ['ngRoute']);

checkout.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/checkout', {
        templateUrl: 'public/checkout/checkout.html',
        controller: 'CheckoutCtrl'
    });
}]);

checkout.controller('CheckoutCtrl', function($scope, CommonProp) {
    $scope.items = CommonProp.getItems();   
    $scope.total = CommonProp.getTotal();
});
