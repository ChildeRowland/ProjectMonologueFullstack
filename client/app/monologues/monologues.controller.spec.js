'use strict';

describe('test MonologuesCtrl', function () {

  // load the controller's module
  beforeEach(module('projectMonologueFullstackApp'));

  var MonologuesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_) {
    scope = _$rootScope_.$new();
    MonologuesCtrl = _$controller_('MonologuesCtrl', {
      $scope: scope
    });
  }));

  it('should assign variables from the controller', function () {
    expect(MonologuesCtrl.criteriaAdvanced).not.toBe(undefined);
  });

  it('should assign variables from a value service', function () {
    var toTest = MonologuesCtrl.genderOptions;
    
    expect(toTest.length).toBeGreaterThan(2);
    expect(toTest).toContain(jasmine.any(Object));
  });

  describe('switchSearch function', function () {
    var toTest = MonologuesCtrl;
    toTest.switchSearch();

    xit('should have syntax', function () {
      expect(toTest.isSimpleSearch).toBe(false);
    });

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
