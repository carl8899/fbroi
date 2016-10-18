'use strict';


angular.module('carl8899.apis')
	.factory('UserPreference', ['$resource', function($resource) {
		return $resource('api/user-preferences/:key', {
			key: '@key'
		}, {
			update: {
				method: 'PUT',
				url: 'api/user-preferences/:key'
			}
		});
	}]);