'use strict';


angular.module('carl8899.controllers')
	.factory('UserPreferenceService', [ '$filter', function($filter) {
		var UserPreferenceService = {
			getDefaultPreference: function(key) {
				switch(true) {
					case (key == 'CAMPAIGN_TABLE_FIELDS'): {
						return [
							'name',
							'fb_created_at',
							'status',
							'bidding',
							'clicks',
							'ctr',
							'cpc',
							'cpm',
							'revenue',
							'roi'
						];
						break;
					}
					case (key == 'ADSET_TABLE_FIELDS'): {
						return [
							'name',
							'fb_created_at',
							'status',
							'bidding',
							'clicks',
							'ctr',
							'cpc',
							'cpm',
							'revenue',
							'roi'
						];
						break;
					}
					case (key == 'AD_TABLE_FIELDS'): {
						return [
							'name',
							'fb_created_at',
							'status',
							'bidding',
							'clicks',
							'ctr',
							'cpc',
							'cpm',
							'revenue',
							'roi'
						];
						break;
					}
				}
				return null;
			}
		};

		return UserPreferenceService;
	}]);