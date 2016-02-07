'use strict';

describe('Controller: MonologuesCtrl', function () {

  // load the controller's module
  beforeEach(module('projectMonologueFullstackApp'));

  var MonologuesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MonologuesCtrl = $controller('MonologuesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

describe('Test Monologue Services', function() {
  var testSubject;

  beforeEach(module('projectMonologueFullstackApp'));

  beforeEach(inject(function (_monologueResource_) {
    testSubject = _monologueResource_;
  }));

  it('should return $resource with an endpoint', function () {
    expect(1).toBeTruthy;
  });

});
