'use strict';

describe('Controller: ConferenceCtrl', function () {

  // load the controller's module
  beforeEach(module('nbtc2015App'));

  var ConferenceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConferenceCtrl = $controller('ConferenceCtrl', {
      $scope: scope
    });
  }));
});
