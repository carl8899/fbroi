'use strict';


angular.module('carl8899.apis')
	.factory('Account', ['$resource', function($resource) {
		return $resource('api/accounts/:id', {
			id: '@id'
		}, {
			update: {
				method: 'PUT',
				url: 'api/accounts/:id'
			}
		});
	}]);