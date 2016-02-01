'use strict';

angular.module('projectMonologueFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('monologues', {
        url: '/monologues',
        templateUrl: 'app/monologues/monologues.html',
        controller: 'MonologuesCtrl',
        controllerAs: 'ctrl'
      });
  });
