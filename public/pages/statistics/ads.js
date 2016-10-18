'use strict';

angular.module('carl8899.controllers')
	.controller('statisticsAdController', ['$rootScope', '$scope', '$q', 'Auth', 'Utils', 'Ad', function($rootScope, $scope, $q, Auth, Utils, Ad) {

		var init = function() {
			$scope.filters = {
				search: {
					startDate: moment().subtract(7, 'days').format('YYYY-MM-DD'),
					// startDate: '2015-04-01',
					// endDate: '2015-04-30',
					timeIncrement: 1
				},
				graph: {
					field1: 'clicks',
					field2: 'cpc'
				},
				table: {

				}
			};
			
			$scope.tabledata = {};
			$scope.checkedItems = [];
			$scope.checkedItemStatus = '';
		};

		$scope.loadData = function() {
			$rootScope.showWaiting();
			Ad.query({
				start_date: $scope.filters.search.startDate,
				end_date: $scope.filters.search.endDate,
				time_increment: $scope.filters.search.timeIncrement
			}).$promise
				.then(function(ads) {
					$scope.ads = ads;
					$rootScope.hideWaiting();
				}, function(err) {
					$scope.ads = [];
					$rootScope.onAPIError(err);
					$rootScope.hideWaiting();
				});
		};
		$scope.render = function(which) {
			if(which == '' || which == 'GRAPH') {
				$scope.graphdata = $scope.renderGraph($scope.ads, $scope.filters);	
			}

			if(which == '' || which == 'TABLE') {
				$scope.tabledata = $scope.renderTable(
					_
						.chain($scope.ads)
						.map(function(data) {
							return _.pick(data, 'id', 'account_id', 'bidding', 'name', 'status', 'metrics');
						})
						.value(),
					$scope.filters,
					'AD');
			}
		};

		$scope.onTableSettings = function() {
			$scope.showTableSettings('AD')
				.then(function(columns) {
					$scope.render('TABLE');
				});
		};

		$scope.onClearSelected= function() {
			while($scope.checkedItems.length > 0) $scope.checkedItems.pop();
		};
		$scope.onApplySelected= function() {

			if($scope.checkedItems.length == 0) return;
			if($scope.checkedItemStatus == '') return;
			$rootScope.showWaiting();

			var updateItem = function(item) {
				var deferred = $q.defer();
				item.status = $scope.checkedItemStatus;
				item.$update()
					.then(function() {
						deferred.resolve(item);
						$rootScope.hideWaiting();
					}, function(err) {
						deferred.reject(err);
					});

				return deferred.promise;
			};
			var $promises = [];
			_.each($scope.checkedItems, function(item) {
				$promises.push(updateItem(new Ad(item)));
			});

			$q.all($promises)
				.then(function() {
					$scope.loadData();
				}, function(err) {
					$rootScope.hideWaiting();
				});
		};

		$scope.$watch('filters.search', function() {
			$scope.loadData();
		}, true);
		$scope.$watch('ads', function() {
			$scope.render('');
		}, true);
		$scope.$watch('filters.graph', function() {
			$scope.render('GRAPH');
		}, true);
		$scope.$watch('filters.table', function() {
			$scope.render('TABLE');
		}, true);

		init();
	}]);