'use strict';


angular.module('carl8899.apis')
	.factory('Rule', ['$resource', function($resource) {
		return $resource('api/rules/:id', {
			id: '@id'
		}, {
			update: {
				method: 'PUT',
				url: 'api/rules/:id'
			}
		});
	}]);