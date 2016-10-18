'use strict';


angular.module('carl8899.apis')
    .factory('Product', ['$resource', function($resource) {
        return $resource('api/products/:id', {
            id: '@id'
        }, {
            update: {
                method: 'PUT',
                url: 'api/products/:id'
            }
        });
    }]);