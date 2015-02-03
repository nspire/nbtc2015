'use strict';

/**
 * @ngdoc directive
 * @name nbtc2015App.directive:menuButton
 * @description
 * # menuButton
 */
angular.module('nbtc2015App')
  .directive('menuButton', function ($timeout, mainMenuService) {
    return {
      template: '<a id="menu-button" ng-click="menu.open()"><i class="fa fa-compass fa-2x fa-fw"></i><span>Menu</span></a>',
      replace: true,
      restrict: 'E',
      link: function postLink(scope, element) {
        scope.menu = mainMenuService;

        // hover animation after 2s
        $timeout(function () {
          element.addClass('hover');
        }, 2000);

        // un-hover after first click
        var cleanup = element.on('click', function () {
          element.removeClass('hover');
          cleanup();
        });
      }
    };
  });
