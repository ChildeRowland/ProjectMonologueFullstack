'use strict';

angular.module('projectMonologueFullstackApp')

.factory('ValuesList', function (GENDEROPTIONS, AGEOPTIONS) {
	var ValuesList = {
		genderOptions: GENDEROPTIONS,
		ageOptions: AGEOPTIONS
	};

	ValuesList.genderList = generateList(GENDEROPTIONS);
	ValuesList.ageList = generateList(AGEOPTIONS);

	function generateList (objValue) {
		var newArray = [];
		angular.forEach(objValue, function (obj) {
			if ( obj['value'].length > 1 ) {
				newArray.push(obj['value']);
			}
		})
		return newArray;
	}

	return ValuesList;
})

.value('GENDEROPTIONS', [
	{
		name: 'leave unspecified',
		value: ''
	}, {
		name: 'male',
		value: 'male'
	}, {
		name: 'female',
		value: 'female'
	}, {
		name: 'transgender',
		value: 'transgender'
	}, {
		name: 'other',
		value: 'other'
	}
])

.value('AGEOPTIONS', [
	{ 
		name: 'leave unspecified',
		value: ''
    }, { 
		name: 'child',
		value: 'child'
    }, { 
		name: 'teenager',
		value: 'teenager'
    }, { 
		name: 'young adult',
		value: 'young adult'
    }, { 
		name: 'adult',
		value: 'adult'
    }, { 
		name: 'senior',
		value: 'senior'
    }
])



