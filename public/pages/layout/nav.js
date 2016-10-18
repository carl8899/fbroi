'use strict';

angular.module('carl8899.controllers')
	.controller('layoutNavController', function ($scope) {
		$scope.oneAtATime = false;

		$scope.status = {
			isFirstOpen: true,
			isSecondOpen: true,
			isThirdOpen: true
		};
	});