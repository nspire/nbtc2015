'use strict';

describe('Controller: GicjudgesCtrl', function () {

  // load the controller's module
  beforeEach(module('nbtc2015App'));

  var GicjudgesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GicjudgesCtrl = $controller('GicjudgesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
