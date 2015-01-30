'use strict';

/**
 * @ngdoc function
 * @name nbtc2015App.controller:ConferenceCtrl
 * @description
 * # ConferenceCtrl
 * Controller of the nbtc2015App
 */
angular.module('nbtc2015App')
  .controller('ConferenceCtrl', function ($scope) {
    $scope.figures = [
      {
        number: '275',
        desc: 'delegates'
      },
      {
        number: '20',
        desc: 'world class speakers'
      },
      {
        number: '12',
        desc: 'professional workshops'
      },
      {
        number: '20+',
        desc: 'prominent sponsors'
      },
      {
        number: '2',
        desc: 'fierce competitions'
      },
      {
        number: '$30k+',
        desc: 'cash prizes'
      },
      {
        number: '45+',
        desc: 'hours of experience'
      },
      {
        number: '\u221e',
        desc: 'big ideas'
      },
      {
        number: '1',
        desc: 'epic weekend'
      },
    ];
  });
