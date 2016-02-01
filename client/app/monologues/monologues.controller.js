'use strict';

angular.module('projectMonologueFullstackApp')

	.controller('MonologuesCtrl', function ($log, $filter, GENDEROPTIONS, AGEOPTIONS, MonologuesControllerDataService) {
		var self = this;

		self.results;
		self.monologues;
		self.criteriaAdvanced = {};

		self.genderOptions = GENDEROPTIONS;
		self.ageOptions = AGEOPTIONS;
		self.criteriaAdvanced.gender = self.genderOptions[0];
		self.criteriaAdvanced.age = self.ageOptions[0];

		MonologuesControllerDataService.getMonologuesListForCtrl(null, function (isValid, responce) {
			if (isValid) {
				self.monologues = responce;
			} else {
				$log('Error in the controller')
			}
		});

		self.adjustedFilterSearch = function() {
			self.results = $filter('adjustedFuzzySearch')(self.monologues, self.criteriaSimple);
		};

		self.advancedSearch = function() {
			self.results = $filter('multifieldSearch')(self.monologues, self.criteriaAdvanced);
		};

});
