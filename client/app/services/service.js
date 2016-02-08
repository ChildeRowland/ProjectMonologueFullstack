'use strict';

angular.module('projectMonologueFullstackApp') 

	.factory('monologueDeleteResource', function($resource) {
	  return $resource('/api/monologues/:id');
	})

	.factory('monologueResource', function($resource) {
	  return $resource('/api/monologues');
	})

	.service('MonologueRESTService', function($log, monologueResource) {
	  var self = this;

	  self.getMonologuesList = function(params, onCompletion) {
	    $log.debug('Getting Monologue List with params: ', params);
	    monologueResource.query(params).$promise
	    .then(function onSuccess(responce) {
	      onCompletion(true, responce);
	    }, function onError(error) {
	      onCompletion(false, error);
	    })
	  };
	})

	.service('MonologuesControllerDataService', function(MonologueRESTService) {
	  var self = this;

	  self.getMonologuesListForCtrl = function(params, onCompletion) {
	    MonologueRESTService.getMonologuesList(params, function(isValid, responce) {
	      onCompletion(isValid, responce);
	    })
	  };
	}); 