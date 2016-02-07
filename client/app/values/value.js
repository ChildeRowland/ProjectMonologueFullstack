'use strict';

angular.module('projectMonologueFullstackApp')

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

// .value('GENDERLIST', [ 'other', 'male', 'female', 'transgender' ])

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

.value('AGELIST', [ 'child', 'teenager', 'young adult', 'adult', 'senior'])
