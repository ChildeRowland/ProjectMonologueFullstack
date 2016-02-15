'use strict';

angular.module('projectMonologueFullstackApp')

  .config(function ($stateProvider, $urlRouterProvider, UI_STATES) {
    $stateProvider
      .state(UI_STATES.kMonologueState.name, {
        url: '/monologues',
        templateUrl: 'app/monologues/monologues.html',
        controller: 'MonologuesCtrl',
        controllerAs: 'ctrl'
      })

      .state(UI_STATES.kMonologueNewState.name, {
        url: '/monologues/new',
        templateUrl: 'app/monologues/new.html',
        controller: 'NewMonologueCtrl',
        controllerAs: 'ctrl'
        // authenticate: ['user', 'admin']
      });
  });