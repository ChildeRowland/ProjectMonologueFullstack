'use strict';

angular.module('projectMonologueFullstackApp')

	.directive('cmShowMonologue', function() {
		return {
			templateUrl: 'app/monologues/partials/show.html',
			scope: false
		}
	})

	.directive('cmDeveloperPortal', function() {
		return {
			templateUrl: 'app/monologues/partials/developer.html',
			scope: false
		}
	})

	.directive('cmSimpleSearch', function() {
		return { 
			templateUrl: 'app/monologues/partials/simplesearch.html',
			scope: false
		}
	})

	.directive('cmAdvancedSearch', function() {
		return { 
			templateUrl: 'app/monologues/partials/advancedsearch.html',
			scope: false
		}
	})

	.controller('MonologuesCtrl', function ($log, $filter, GENDEROPTIONS, AGEOPTIONS, GENDERLIST, AGELIST, MonologuesControllerDataService, monologueResource) {
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
			console.log(self.isSimpleSearch);
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

		self.fullView = function(obj) {
			console.log(obj);
		}


		self.submitMonologue = function() {
			monologueResource.save(self.newMonologue).$promise
        	.then(function onSuccess(responce) {
        		console.log(responce);
        	}, function onError(error) {
        		console.log(error);
        	})
		};

});
