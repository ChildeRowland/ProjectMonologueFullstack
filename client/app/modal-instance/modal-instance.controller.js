'use strict';

angular.module('projectMonologueFullstackApp')

.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, MonologueObject) {
	var self = this;
	self.monologue = MonologueObject;

	self.close = function () {
		$uibModalInstance.close();
		self.monologue;
	}
})