'use strict';

angular.module('carl8899.system')
    .filter('nl2br', function ($sce) {
        return function (msg, is_xhtml) {
            var xhtml = is_xhtml || true;
            var breakTag = (xhtml) ? '<br />' : '<br>';
            var text = (msg + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
            return $sce.trustAsHtml(text);
        };
    })
    .filter('plural', function () {
        return function (input, noun) {
            if (!input) {
                return 'No ' + noun;
            } else if (input == 1) {
                return input + ' ' + noun;
            }
            return input + ' ' + noun + '(s)';
        };
    })
    .filter('money', function () {
        return function (input, currency) {
            if (!currency) {
                currency = 'USD';
            }
            return input + ' ' + currency;
        };
    })
    .filter('titleCase', function () {
        return function (input) {
            return input
                .replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });
        };
    });