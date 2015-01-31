'use strict';

/**
 * @ngdoc directive
 * @name nbtc2015App.directive:menuButton
 * @description
 * # menuButton
 */
angular.module('nbtc2015App')
  .directive('menuButton', function (mainMenuService) {
    return {
      template: '<a id="menu-button" ng-click="menu.open()"><i class="fa fa-compass fa-2x fa-fw"></i><span>Menu</span></a>',
      replace: true,
      restrict: 'E',
      link: function postLink(scope) {
        scope.menu = mainMenuService;
      }
    };
  });
