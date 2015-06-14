(function() {
    'use strict';

    var sharedModule = angular.module('shared');
    sharedModule.config(configure);

    /*@ngInject*/
    function configure($logProvider, customExceptionHandlerProvider, routehelperConfigProvider,
        gettext, $urlRouterProvider, $stateProvider, $animateProvider) {
        sharedModule.value('config', config);
        var config = {
            appErrorPrefix: '[Time Error]: ',
            appTitle: gettext('Time dynamiska mallar'),
            version: gettext('Time-version/0.0.0')
        };

        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        // Configure the common route provider
        routehelperConfigProvider.config.$urlRouterProvider = $urlRouterProvider;
        routehelperConfigProvider.config.$stateProvider = $stateProvider;
        routehelperConfigProvider.config.docTitle = gettext('Time');

        // Configure the common exception handler
        customExceptionHandlerProvider.configure(config.appErrorPrefix);

        // restrict animation to elements with the bi-animate css class with a regexp.
        $animateProvider.classNameFilter(/^((?!(fa-spin)).)*$/);
    }
})();