'use strict';

angular.module('projectMonologueFullstackApp') 

// Main search
// Filter by multiple properites with a single input
	.filter('adjustedFuzzySearch', function($filter) {
      var results;

      return function(data, criteria) {

        if ( criteria.length < 1 ) { 
          	results = null; 
        } else {

        	var excludeProperties = function(item) {
	        	var value = criteria.toLowerCase();
	          	// console.log(escape(item.playwright).toLowerCase());
	          	return escape(item.title).toLowerCase().indexOf(value || '') !== -1 || 
                     escape(item.character).toLowerCase().indexOf(value || '') !== -1 ||
                   	 escape(item.playwright).toLowerCase().indexOf(value || '') !== -1;
        	};

          results = $filter('filter')(data, excludeProperties, criteria);
        }
        return results;
      }
    })

// Advanced Search
// Multiple inputs, all must match
    .filter('multifieldSearch', function($filter) {
    var results;

    return function(data, criteria) {
      // Check for any value in the search criteria properties.
      var iterateProperties = function(obj) {
        for ( var prop in obj ) {
          if ( obj[prop].length > 1 ) {
            return false
          }
        }
      };

      if ( iterateProperties(criteria) ) {
        results = null;
      } else {
        results = $filter('filter')(data, criteria);
        if ( criteria.gender != "leave unspecified" ) {
          results = $filter('filter')(results, criteria.gender, true);
        }
        if ( criteria.age != "leave unspecified" ) {
          results = $filter('filter')(results, criteria.age, true);
        }
      }

      return results;
    }
  })