'use strict';

(function() {

class AdminController {
  constructor(User, monologueDeleteResource) {
    // Use the User $resource to fetch all users
    this.users = User.query();

    var self = this
    self.idForDelete;
    this.deleteMonologue = function(params) {
		monologueDeleteResource.delete({ id: params}).$promise
    	.then(function onSuccess(responce) {
    		console.log('deleted');
    		self.idForDelete = null;
    	}, function onError(error) {

    	});
	};
  }

  delete(user) {
    user.$remove();
    this.users.splice(this.users.indexOf(user), 1);
  }
}

angular.module('projectMonologueFullstackApp.admin')
  .controller('AdminController', AdminController);

})();
