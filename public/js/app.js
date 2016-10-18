'use strict';

// Define main angularjs app
angular.module('carl8899', [
    'angularBootstrapNavTree',
    'angularFileUpload',
    'angular-flot',
    'angular-loading-bar',
    'angular-momentjs',
    'angular-rickshaw',
    'checklist-model',
    'colorpicker.module',
    'datatables',
    'datatables.bootstrap',
    'datatables.colreorder',
    'datatables.colvis',
    'datatables.tabletools',
    'datatables.scroller',
    'datatables.columnfilter',
    'easypiechart',
    'facebook',
    'FBAngular',
    'flow',
    'lazyModel',
    'minovateApp',
    'ngAnimate',
    'ngCookies',
    'ngImgCrop',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'NgSwitchery',
    'ngTable',
    'ngTagsInput',
    'ngTouch',
    'oc.lazyLoad',
    'picardy.fontawesome',
    'smart-table',
    'textAngular',
    'toastr',
    'uiGmapgoogle-maps',
    'ui.bootstrap',
    'ui.calendar',
    'ui.grid',
    'ui.grid.resizeColumns',
    'ui.grid.edit',
    'ui.grid.moveColumns',
    'ui.router',
    'ui.utils',
    'ui.select',
    'ui.tree',
    'xeditable',

    'carl8899.system',
    'carl8899.services',
    'carl8899.controllers',
    'carl8899.apis'
]);

// Define sub modules
angular.module('minovateApp', []);
angular.module('carl8899.system', []);
angular.module('carl8899.services', []);
angular.module('carl8899.controllers', []);
angular.module('carl8899.apis', []);
