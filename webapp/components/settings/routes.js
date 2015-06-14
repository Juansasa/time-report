(function() {
    'use strict';

    angular.module('settings')
        .run(setUpRoutes);

    /*@ngInject*/
    function setUpRoutes(routeHelper, gettext) {
        var stateName = gettext('settings');
        var stateConfig = {
            url: '/settings',
            templateUrl: 'components/settings/template.html',
            title: gettext('Settings'),
            controller: 'SettingsController'
        };

        routeHelper.registerState(stateName, stateConfig);
    }
    setUpRoutes.$inject = ['routeHelper', 'gettext'];
})();