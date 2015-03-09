'use strict';

/**
 * @ngdoc directive
 * @name nbtc2015App.directive:mainMenu
 * @description
 * # mainMenu
 */
angular.module('nbtc2015App')
  .directive('mainMenu', function (slideService, mainMenuService) {
    return {
      template: '<div id="mainmenu" ng-if="menu.isOpen" ng-click="menu.close()">' +
          '<a class="mainmenu-close" ng-click="menu.hide()"><i class="fa fa-2x fa-times"></i></a>' +
          '<div class="mainmenu-body">' +
            '<a class="mainmenu-item" ng-repeat="item in items" ng-href="{{ item.uri }}" ng-click="slideService.changeDirection(\'down\')">' +
              '<div class="mainmenu-icon"><i class="fa fa-4x" ng-class="[item.icon]"></i></div>' +
              '<h2>{{ item.name }}</h2>' +
            '</a>' +
          '</div>' +
        '</div>',
      restrict: 'E',
      replace: true,
      link: function postLink(scope) {

        // make dependencies available to DOM
        scope.menu = mainMenuService;
        scope.slideService = slideService;

        // menu items
        scope.items = [
          {
            name: 'Home',
            uri: '#/',
            icon: 'fa-home'
          },
          {
            name: 'NBTC\'2015',
            uri: '#/conference',
            icon: 'fa-fire'
          },
          {
            name: 'About',
            uri: '#/about',
            icon: 'fa-question'
          },
          {
            name: 'GIC',
            uri: '#/gic',
            icon: 'fa-globe'
          },
         {
            name: 'EC',
            uri: '#/ec',
            icon: 'fa-trophy'
          },
          {
            name: 'Speakers',
            uri: '#/speakers',
            icon: 'fa-paper-plane-o'
          },
          {
            name: 'Sponsors',
            uri: '#/sponsors',
            icon: 'fa-star-o'
          },
          {
            name: 'Team',
            uri: '#/team',
            icon: 'fa-users'
          },
          {
            name: 'Connect',
            uri: '#/contact',
            icon: 'fa-comment-o'
          }
        ];
      }
    };
  });
