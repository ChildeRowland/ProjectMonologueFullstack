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

    return function(data, criteria, propValues) {
      // Check for any value in the search criteria properties.
      var iterateProperties = function(obj) {
        var isEmpty = true;

        for ( var prop in obj ) {
          // console.log(obj[prop]);
          if ( obj[prop].length > 0 ) {
            isEmpty = false;
            return isEmpty;
          } else {
            isEmpty = true;
          }
        }
        return isEmpty;
      };

      if ( iterateProperties(criteria) ) {
        results = null;
      } else {
        results = $filter('filter')(data, criteria); 

        for (var item in propValues) {
          var objectProperty = criteria[propValues[item]];
          if ( objectProperty != "" ) {
            results = $filter('filter')(results, objectProperty, true);
          }
        }
      }

      return results;
    }
  })
