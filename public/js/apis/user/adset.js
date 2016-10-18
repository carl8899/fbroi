'use strict';


angular.module('carl8899.apis')
	.factory('AdSet', ['$resource', function($resource) {
		return $resource('api/ad-sets/:id', {
			id: '@id'
		}, {
			update: {
				method: 'PUT',
				url: 'api/ad-sets/:id'
			}
		});
	}]);