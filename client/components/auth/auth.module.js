'use strict';

angular.module('projectMonologueFullstackApp.auth', [
  'projectMonologueFullstackApp.constants',
  'projectMonologueFullstackApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
