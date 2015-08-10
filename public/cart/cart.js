'use strict';

var cart = angular.module('cart', ['ngRoute']);

cart.config(function($routeProvider) {
    $routeProvider.when('/cart', {
        templateUrl: 'public/cart/cart.html',
        controller: 'CartCtrl'
    });
});

cart.service('CommonProp', function() {
    var Items = '', Total = 0;
    return {
        getItems:   function() { return Items; },
        setItem:    function(value) { Items = value; },
        getTotal:   function(){ return Total; },
        setTotal:   function(value){ Total = value; }
    };
});

cart.controller('CartCtrl', function($scope, CommonProp) {
    $scope.total = function() {
        var t = 0;
        for (var k in $scope.items) {
            t += parseInt($scope.items[k].selected);
        }
        CommonProp.setTotal(t);
        return t;
    };
    $scope.items = [{
        'name': 'Hard Disk',
        'id': 'HD',
        'selected': 0,
        'prices': [{
            'size': '200GB',
            'price': '2000'
        }, {
            'size': '400GB',
            'price': '4000'
        }]
    }, {
        'name': 'CPU',
        'id': 'CPU',
        'selected': 0,
        'prices': [{
            'size': 'i3',
            'price': '20000'
        }, {
            'size': 'i5',
            'price': '25000'
        }]
    }, {
        'name': 'Monitor',
        'id': 'MON',
        'selected': 0,
        'prices': [{
            'size': '16\'',
            'price': '3000'
        }, {
            'size': '19\'',
            'price': '5000'
        }]
    }, {
        'name': 'Optical Mouse',
        'id': 'MOU',
        'selected': 0,
        'prices': [{
            'size': 'Optical',
            'price': '350'
        }, {
            'size': 'Advanced',
            'price': '550'
        }]
    }, {
        'name': 'RAM',
        'id': 'RM',
        'selected': 0,
        'prices': [{
            'size': '4GB',
            'price': '4000'
        }, {
            'size': '8GB',
            'price': '8000'
        }]
    }, {
        'name': 'USB Keyboard',
        'id': 'KEY',
        'selected': 0,
        'prices': [{
            'size': 'Standard',
            'price': '2500'
        }, {
            'size': 'Advanced',
            'price': '4500'
        }]
    }];

    $scope.$watch('items',function(){
        CommonProp.setItem($scope.items);
    });

    if (CommonProp.getItems() != '') {
        $scope.items = CommonProp.getItems();
    }
});

cart.directive('checkList', function() {
    return {
        restrict: 'E',
        scope: {
            option: '=',
            name: '=',
            selected: '=selected'
        },
        template: function(elem, attrs) {
            return '<div class="panel-body">\
                        <div class="radio" ng-repeat="i in option">\
                           <label><input type="radio" ng-model="$parent.selected" ng-value="{{i.price}}" name="{{name}}">{{i.size}} Rs.{{i.price}}</label>\
                       </div>\
                    </div>';
        }
    };
});

cart.directive('getScroll', function($window) {
    return {
        scope: {
            scroll: '=scroll'
        },
        link: function(scope, element, attrs) {
            var scrollwindow = angular.element($window);
            scrollwindow.on('scroll', scope.$apply.bind(scope, function() {
                scope.scroll = scrollwindow.scrollTop();
            }));
        }
    };
})
