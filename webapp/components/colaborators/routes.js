(function() {
    'use strict';

    angular.module('colaborators')
        .run(setUpRoutes);

    /*@ngInject*/
    function setUpRoutes(routeHelper, gettext) {
        var stateName = 'colaborators';
        var stateConfig = {
            url: '/colaborators',
            templateUrl: 'components/colaborators/template.html',
            title: gettext('Colaborators'),
            controller: 'ColaboratorsController'
        };

        routeHelper.registerState(stateName, stateConfig);
    }
    setUpRoutes.$inject = ['routeHelper', 'gettext'];
})();