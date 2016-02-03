'use strict';

angular.module('projectMonologueFullstackApp')
	
	// single entry when iterating over search results
	.directive('cmShowMonologue', function() {
		return {
			templateUrl: 'app/monologues/partials/show.html',
			scope: false
		}
	})

	// examine one entry from the database
	.directive('cmSingleView', function() {
		return {
			templateUrl: 'app/monologues/partials/singleview.html',
			scope: false
		}
	})

	// used to display some code between <pre> tags
	.directive('cmDeveloperPortal', function() {
		return {
			templateUrl: 'app/monologues/partials/developer.html',
			scope: false
		}
	})

	// simple search
	.directive('cmSimpleSearch', function() {
		return { 
			templateUrl: 'app/monologues/partials/simplesearch.html',
			scope: false
		}
	})

	// advanced search
	.directive('cmAdvancedSearch', function() {
		return { 
			templateUrl: 'app/monologues/partials/advancedsearch.html',
			scope: false
		}
	});