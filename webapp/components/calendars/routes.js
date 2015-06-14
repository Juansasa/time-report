(function() {
    'use strict';

    angular.module('calendars')
        .run(setUpRoutes);

    /*@ngInject*/
    function setUpRoutes(routeHelper, gettext) {
        var stateName = gettext('calendars');
        var stateConfig = {
            url: '/calendars',
            templateUrl: 'components/calendars/template.html',
            title: gettext('calendars'),
            controller: 'CalendarsController'
        };

        routeHelper.registerState(stateName, stateConfig);
        routeHelper.setDefaultState(stateConfig.url);
    }
    setUpRoutes.$inject = ['routeHelper', 'gettext'];
})();