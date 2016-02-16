'use strict';

angular.module('projectMonologueFullstackApp')
	
	// single input for forms
	.directive('cmUserInput', function () {
		return {
			templateUrl: 'app/partials/userinput.html',
			scope: false,
			compile: function (element, attributes) {
				var inputTag = element.find('input');
				inputTag.attr('ng-model', attributes.forModel);
				inputTag.attr('name', attributes.forName);
				inputTag.attr('uib-typeahead', attributes.forTypeahead);

				var labelTag = element.find('label');
				labelTag.html(attributes.forLabel);

				var spanTag = element.find('span');
				spanTag.attr('ng-show', attributes.forShow);
			}
		};
	})

	// single entry when iterating over search results
	.directive('cmShowMonologue', function() {
		return {
			templateUrl: 'app/partials/show.html',
			scope: false
		}
	})

	// examine one entry from the database
	.directive('cmSingleView', function() {
		return {
			templateUrl: 'app/partials/singleview.html',
			scope: false
		}
	})

	// used to display some code between <pre> tags
	.directive('cmDeveloperPortal', function() {
		return {
			templateUrl: 'app/partials/developer.html',
			scope: false
		}
	})

	// simple search
	.directive('cmSimpleSearch', function() {
		return { 
			templateUrl: 'app/partials/simplesearch.html',
			scope: false
		}
	})

	// advanced search
	.directive('cmAdvancedSearch', function() {
		return { 
			templateUrl: 'app/partials/advancedsearch.html',
			scope: false
		}
	});