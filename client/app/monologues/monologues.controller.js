'use strict';

angular.module('projectMonologueFullstackApp') 

	.filter('adjustedFuzzySearch', function($filter) {
      var results;

      return function(data, criteria) {

        if ( criteria.length < 1 ) { 
          	return results = null; 
        } else {

        	var excludeProperties = function(item) {
	        	var value = criteria.toLowerCase();
	          	// console.log(escape(item.playwright).toLowerCase());
	          	return escape(item.character).toLowerCase().indexOf(value || '') !== -1 || 
                   	   escape(item.playwright).toLowerCase().indexOf(value || '') !== -1;
        	};

          	results = $filter('filter')(data, excludeProperties, criteria);
          	return results;
        }
      }
    })

  .controller('MonologuesCtrl', function ($log, $filter, MonologuesControllerDataService) {
  	var self = this;

  	self.userInput;
  	self.results;
  	self.monologues;

  	MonologuesControllerDataService.getMonologuesListForCtrl(null, 
        function (isValid, responce) {
        	if (isValid) {
          		self.monologues = responce;
        	} else {
          		$log('BEANS')
        }
    });

  	self.adjustedFilterSearch = function() {
        self.results = $filter('adjustedFuzzySearch')(self.monologues, self.userInput);
    };


    // $http.get('/api/monologues')
    // .success(function(data) {
    //   self.monologues = data;
    //   console.log(self.monologues);
    // })
    // .error(function(err) {
    //   alert('Error! Something went wrong');
    // });

});
