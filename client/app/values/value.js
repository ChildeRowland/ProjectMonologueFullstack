'use strict';

angular.module('projectMonologueFullstackApp')

.value('GENDEROPTIONS', [
	{'leave unspecified': ''},
	{'male': 'male'},
	{'female': 'female'},
	{'transgender': 'transgender'},
	{'other': 'other'}
])

.value('GENDERLIST', [ 'male', 'female', 'transgender', 'other' ])

.value('AGEOPTIONS', [
	{'leave unspecified': ''},
	{'child': 'child'},
	{'teenager': 'teenager'},
	{'young adult': 'young adult'},
	{'adult': 'adult'},
	{'senior': 'senior'}
])

.value('AGELIST', [ 'child', 'teenager', 'young adult', 'adult', 'senior'])
