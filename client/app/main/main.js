'use strict';

angular.module('projectMonologueFullstackApp')
  .config(function($stateProvider, $urlRouterProvider, UI_STATES) {
    $stateProvider
      .state(UI_STATES.kMainState.name, {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'ctrl'
      });
  });
