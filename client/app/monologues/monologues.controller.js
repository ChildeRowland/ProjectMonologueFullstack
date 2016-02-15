'use strict';

angular.module('projectMonologueFullstackApp')

	.factory('MonologueEngineDTO', function () {
		function MonologueEngine() {
			var self = this;
			// clean-up the MonologuesCtrl
		};

		return MonologueEngine;
	})

	.controller('NewMonologueCtrl', function ($log, $state, GENDEROPTIONS, AGEOPTIONS, AGELIST, MonologuesControllerDataService, monologueResource) {
		var self = this;

		self.monologues;

		self.genderOptions = GENDEROPTIONS;
		self.ageOptions = AGEOPTIONS;

		self.ageList = AGELIST;
		self.genderList = (function() {
			var newArray = [];
			angular.forEach(self.genderOptions, function(obj) { 
				if ( obj['value'].length > 1 ) {
					newArray.push(obj['value']);
				}
			})
			return newArray;
		})();

		MonologuesControllerDataService.getMonologuesListForCtrl(null, function (isValid, responce) {
			if (isValid) {
				self.monologues = responce;
			} else {
				$log.error('Error in the controller');
			}
		});

		self.isObjComplete = function () {
			var properties = ['playwright', 'title', 'character', 'body'];
			return properties.every(prop => ( self.newMonologue[prop]) );
		}

		self.submitMonologue = function() {
			if ( self.isObjComplete() ) {
				// alert('will submit');
				monologueResource.save(self.newMonologue).$promise
	        	.then(function onSuccess(responce) {
	        		$log.info(responce);
	        		$state.go('monologues');
	        	}, function onError(error) {
	        		$log.error(error);
	        	});
			} else {
				alert('Please complete all fields');
	        }
		};

		self.transformForTypeahead = function(array, prop) {
			var newArray = [];

			angular.forEach(array, function(obj) {
				if (newArray.indexOf(obj[prop]) == -1) {
					newArray.push(obj[prop]);
				}
			})
			return newArray;
		};
	})

	.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, MonologueObject) {
		var self = this;
		self.monologue = MonologueObject;

		self.close = function () {
			$uibModalInstance.close();
			self.monologue;
		}
	})

	.controller('MonologuesCtrl', function (MonologueEngineDTO, $uibModal, $log, $filter, $state, GENDEROPTIONS, AGEOPTIONS, MonologuesControllerDataService, monologueResource) {
		var self = this;

		self.me = new MonologueEngineDTO;
		
		self.results;
		self.monologues;
		self.criteriaAdvanced = {};

		self.genderOptions = GENDEROPTIONS;
		self.ageOptions = AGEOPTIONS;

		self.open = function (obj) {
			var modalInstance = $uibModal.open({
				templateUrl: 'app/monologues/partials/singleview.html',
				controller: 'ModalInstanceCtrl',
				controllerAs: 'ctrl',
				resolve: {
					MonologueObject: function () {
						return obj;
					}
				}
			});
		};

		self.isSimpleSearch = true;
		self.switchSearch = function() {
			if ( self.isSimpleSearch === true ) {
				self.criteriaSimple = "";
				self.adjustedFilterSearch();
				self.isSimpleSearch = false;
			} else {
				self.criteriaAdvanced = {};
				self.advancedSearch();
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
				$log.error('Error in the controller');
			}
		});

		self.adjustedFilterSearch = function() {
			self.results = $filter('adjustedFuzzySearch')(self.monologues, self.criteriaSimple);
		};

		self.advancedSearch = function() {
			self.results = $filter('multifieldSearch')(self.monologues, self.criteriaAdvanced, ['gender', 'age']);
		};
});
