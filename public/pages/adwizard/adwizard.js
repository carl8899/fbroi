'use strict';

angular.module('carl8899.controllers')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('adwizard', {
                url: '/adwizard/:step',
                templateUrl: '/pages/adwizard/adwizard.html',
                controller: 'adWizardController',
                resolve: {
                    currentStep: ['$stateParams', function ($stateParams) {	// goal, create, finish
                        var currentStep = $stateParams.step;
                        if (currentStep && currentStep !== '') return currentStep;
                        else return 'goal';
                    }]
                }
            });
    }])
    .controller('adWizardController', ['$rootScope', '$scope', 'Auth', 'Utils', 'currentStep', function ($rootScope, $scope, Auth, Utils, currentStep) {

        $rootScope.loadCurrentUser(true);

        $rootScope.clearMessage();

        var STEPS = ['goal', 'create', 'finish'];

        var init = function () {
            $scope.currentStep = currentStep;

            $scope.adData = {
                type: '',
                //Creative
                // Right Hand Side Ads
                rightAdDesktop: true,
                rightAdProducts: [],
                rightAdOptions: [],
                //News Feed Ads
                newsAdMobile: true,
                newsAdDesktop: true,
                newsAdProducts: [],
                //Multiple Product Ads
                multipleAdMobile: true,
                multipleAdDesktop: true,
                multiProductsAds: [{products: [{}]}]
            };
        };

        $scope.proceedNextStep = function () {
            var stepIndex = STEPS.indexOf($scope.currentStep);

            if (stepIndex == STEPS.length - 1) {

            }
            else {
                stepIndex++;
                $scope.currentStep = STEPS[stepIndex];
            }
        };

        init();
    }]);