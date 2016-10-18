'use strict';


angular.module('carl8899.apis')
    .factory('Category', ['$resource', function($resource) {
        return $resource('api/cart-categories/:id', {
            id: '@id'
        }, {

        });
    }]);