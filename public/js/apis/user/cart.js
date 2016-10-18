'use strict';


angular.module('carl8899.apis')
    .factory('Cart', ['$resource', function($resource) {
        return $resource('api/carts/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT',
                url: 'api/carts/:id'
            },
            categories: {
                method: 'GET',
                url: 'api/carts/:id/categories',
                isArray: true
            }
        });
    }]);