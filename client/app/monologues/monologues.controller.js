'use strict';

angular.module('projectMonologueFullstackApp')

	.controller('MonologuesCtrl', function ($http, $log, $filter, GENDEROPTIONS, AGEOPTIONS, MonologuesControllerDataService, monologueResource) {
		var self = this;

		self.states = ['', 'California', 'Florida', 'New York'];

		self.results;
		self.monologues;
		self.criteriaAdvanced = {};

		self.genderOptions = GENDEROPTIONS;
		self.ageOptions = AGEOPTIONS;
		// self.criteriaAdvanced.gender = Object.keys(self.genderOptions[0])[0];
		// self.criteriaAdvanced.age = "leave unspecified";

		MonologuesControllerDataService.getMonologuesListForCtrl(null, function (isValid, responce) {
			if (isValid) {
				self.monologues = responce;
			} else {
				$log('Error in the controller');
			}
		});

		self.adjustedFilterSearch = function() {
			self.results = $filter('adjustedFuzzySearch')(self.monologues, self.criteriaSimple);
		};

		self.advancedSearch = function() {
			self.results = $filter('multifieldSearch')(self.monologues, self.criteriaAdvanced, ['gender', 'age']);
		};


		self.submitMonologue = function() {
			monologueResource.save(self.newMonologue).$promise
        	.then(function onSuccess(responce) {
        		console.log(responce);
        	}, function onError(error) {
        		console.log(error);
        	})
		};

});
