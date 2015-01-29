'use strict';

describe('Controller: SpeakersCtrl', function () {

  // load the controller's module
  beforeEach(module('nbtc2015App'));

  var SpeakersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpeakersCtrl = $controller('SpeakersCtrl', {
      $scope: scope
    });
  }));
});
