'use strict';

/**
 * @ngdoc service
 * @name nbtc2015App.slideService
 * @description
 * # slideService
 * Service in the nbtc2015App.
 */
angular.module('nbtc2015App')
  .service('slideService', function ($rootScope) {

    var service = {
      changeDirection: function (direction) {
        // change the direction class of all instantiated '.page' elements at time of call
        angular.forEach(document.getElementsByClassName('page'), function (page) {
          angular.element(page).removeClass('slideup slidedown slideleft slideright').addClass('slide' + direction);
        });
      },
      slide: function (direction) {
        // register a listener that changes the slide direction after new view is instantiated
        var cleanup = $rootScope.$watch(
          function () {
            return document.getElementsByClassName('page').length;
          },
          function (newValue) {
            if (newValue === 2) {
              service.changeDirection(direction);
              cleanup();
            }
          }
        );
      },
      oppositeUtil: function (direction) {
        // return opposite direction as a string
        var opposite;
        switch (direction) {
          case 'up': opposite = 'down'; break;
          case 'down': opposite = 'up'; break;
          case 'left': opposite = 'right'; break;
          case 'right': opposite = 'left'; break;
        }
        return opposite;
      }
    };

    return service;
  });
