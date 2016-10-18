'use strict';


angular.module('carl8899.apis')
	.factory('User', ['$resource', function($resource) {
		return $resource('admin/users/:userId', {
			userId: '@id'
		}, {
			update: {
				method: 'PUT',
				url: 'admin/users'
			}
		});
	}]);