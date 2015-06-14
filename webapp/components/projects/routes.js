(function() {
    'use strict';

    angular.module('projects')
        .run(setUpRoutes);

    /*@ngInject*/
    function setUpRoutes(routeHelper, gettext) {
        var stateName = 'projects';
        var stateConfig = {
            url: '/projects',
            templateUrl: 'components/projects/template.html',
            title: gettext('Projects'),
            controller: 'ProjectsController'
        };

        routeHelper.registerState(stateName, stateConfig);
    }
    setUpRoutes.$inject = ['routeHelper', 'gettext'];
})();