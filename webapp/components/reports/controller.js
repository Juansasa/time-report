(function() {
    'use strict';
    angular.module('reports')
        .controller('ReportsController', ctrl);

    /*@ngInject*/
    function ctrl($scope) {
        $scope.getDays = function() {
            return new Array(31);
        };
    }
})();