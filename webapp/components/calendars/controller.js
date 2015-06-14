(function() {
    'use strict';
    angular.module('calendars')
        .controller('CalendarsController', ctrl);

    /*@ngInject*/
    function ctrl($scope) {
        $scope.getDays = function() {
            return new Array(31);
        };
    }
})();