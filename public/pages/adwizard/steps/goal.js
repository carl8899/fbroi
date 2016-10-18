'use strict';

angular.module('carl8899.controllers')
    .controller('adWizardGoalController', ['$rootScope', '$scope', 'Auth', 'Utils', function($rootScope, $scope, Auth, Utils) {
        $scope.onNextStep = function(type) {
            $scope.adData.type = type;
            $scope.proceedNextStep();
        };
    }]);