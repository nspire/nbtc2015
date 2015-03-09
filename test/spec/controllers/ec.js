'use strict';

describe('Controller: EcCtrl', function () {

  // load the controller's module
  beforeEach(module('nbtc2015App'));

  var EcCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EcCtrl = $controller('EcCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
