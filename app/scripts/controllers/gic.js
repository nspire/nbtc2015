'use strict';

/**
 * @ngdoc function
 * @name nbtc2015App.controller:GicCtrl
 * @description
 * # GicCtrl
 * Controller of the nbtc2015App
 */
angular.module('nbtc2015App')
  .controller('GicCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.toggleInfo = function(event) {
  		var currentElement=event.currentTarget.parentElement;
  		if($(currentElement).hasClass("showInfo")){
  			$(currentElement).removeClass("showInfo");
  			$(event.currentTarget).html("Read More  &gt&gt");
  		} else {
  			$(currentElement).addClass("showInfo");
  			$(event.currentTarget).html("&lt&lt  Read Less");
  		}

	}
  });
