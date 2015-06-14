(function() {
    'use strict';
    /**
     * app Module
     *
     * This is the entry point to the application
     */
    angular.module('time', [
        'shared',

        'calendars',
        'projects',
        'colaborators',
        'reports',
        'settings'
    ]);
})();