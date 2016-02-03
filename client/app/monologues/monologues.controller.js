'use strict';

angular.module('projectMonologueFullstackApp')

	.controller('MonologuesCtrl', function ($log, $filter, $state, GENDEROPTIONS, AGEOPTIONS, GENDERLIST, AGELIST, MonologuesControllerDataService, monologueResource) {
		var self = this;
		
		self.results;
		self.monologues;
		self.criteriaAdvanced = {};

		self.genderOptions = GENDEROPTIONS;
		self.ageOptions = AGEOPTIONS;

		self.genderList = GENDERLIST;
		self.ageList = AGELIST;
		// self.criteriaAdvanced.gender = Object.keys(self.genderOptions[0])[0];
		// self.criteriaAdvanced.age = "leave unspecified";

		self.isSimpleSearch = true;

		self.switchSearch = function() {
			if ( self.isSimpleSearch === true ) {
				self.isSimpleSearch = false;
			} else {
				self.isSimpleSearch = true;
			}
		};

		self.singleViewObject = null;

		self.singleViewToggle = function() {
			self.singleViewObject = null;
		};

		self.fullView = function(obj) {
			self.singleViewObject = obj;
		};

		self.isdeveloperView = false;

		self.switchDev = function() {
			if ( self.isdeveloperView === true ) {
				self.isdeveloperView = false;
			} else {
				self.isdeveloperView = true;
			}
		};

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
        		$state.go('monologues');
        	}, function onError(error) {
        		console.log(error);
        	})
		};

});
