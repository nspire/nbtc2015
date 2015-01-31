'use strict';

/**
 * @ngdoc directive
 * @name nbtc2015App.directive:slide
 * @description
 * # slide
 */
angular.module('nbtc2015App')
  .directive('slide', function (slideService) {
    return {
      restrict: 'A',
      scope: {
        slide: '@'
      },
      link: function (scope, element) {
        // slide when clicking
        element.on('click', function () {
          slideService.slide(scope.slide);
        });

        // style the element
        element.addClass('go-' + scope.slide);

        // enable any tooltips
        element.tooltip({
          placement: slideService.oppositeUtil(scope.slide, true)
        });
      }
    };
  });
