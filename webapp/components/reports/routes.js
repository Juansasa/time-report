(function() {
    'use strict';

    angular.module('reports')
        .run(setUpRoutes);

    /*@ngInject*/
    function setUpRoutes(routeHelper, gettext) {
        var stateName = 'reports';
        var stateConfig = {
            url: '/reports',
            templateUrl: 'components/reports/template.html',
            title: gettext('Reports'),
            controller: 'ReportsController'
        };

        routeHelper.registerState(stateName, stateConfig);
    }
    setUpRoutes.$inject = ['routeHelper', 'gettext'];
})();