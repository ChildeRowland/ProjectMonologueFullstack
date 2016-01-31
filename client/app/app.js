'use strict';

angular.module('projectMonologueFullstackApp', [
  'projectMonologueFullstackApp.auth',
  'projectMonologueFullstackApp.admin',
  'projectMonologueFullstackApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
