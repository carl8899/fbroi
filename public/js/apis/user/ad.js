'use strict';


angular.module('carl8899.apis')
	.factory('Ad', ['$resource', function($resource) {
		return $resource('api/ads/:id', {
			id: '@id'
		}, {
			update: {
				method: 'PUT',
				url: 'api/ads/:id'
			}
		});
	}]);