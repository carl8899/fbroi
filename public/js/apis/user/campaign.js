'use strict';


angular.module('carl8899.apis')
	.factory('Campaign', ['$resource', function($resource) {
		return $resource('api/campaigns/:id', {
			id: '@id'
		}, {
			update: {
				method: 'PUT',
				url: 'api/campaigns/:id'
			}
		});
	}]);