'use strict';

/**
 * @ngdoc service
 * @name nbtc2015App.mainMenuService
 * @description
 * # mainMenuService
 * Service in the nbtc2015App.
 */
angular.module('nbtc2015App')
  .service('mainMenuService', function () {

    var service = {
      isOpen: false,
      open: function () {
        service.isOpen = true;
      },
      close: function () {
        service.isOpen = false;
      }
    };

    return service;
  });
