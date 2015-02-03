'use strict';

/**
 * @ngdoc function
 * @name nbtc2015App.controller:TeamCtrl
 * @description
 * # TeamCtrl
 * Controller of the nbtc2015App
 */
angular.module('nbtc2015App')
  .controller('TeamCtrl', function ($scope) {
    $scope.team = [
      {
        name: 'Elizabeth de Roode',
        title: 'Chair, NBTC\'15',
        img: 'images/team/elizabeth-de-roode.jpg'
      },
      {
        name: 'Rebecca Li',
        title: 'Director of Marketing',
        img: 'images/team/rebecca-li.jpg'
      },
      {
        name: 'Amin Sharifi',
        title: 'Director of Events',
        img: 'images/team/amin-sharifi.jpg'
      },
      {
        name: 'Ribhu Rampersad',
        title: 'Director of Operations',
        img: 'images/team/ribhu-rampersad.jpg'
      },
      {
        name: 'Leyla Beriker',
        title: 'Director of Global Ideas Competition',
        img: 'images/team/leyla-beriker.jpg'
      },
      {
        name: 'Suyoun Jo',
        title: 'Director of Entrepreneurship Competition',
        img: 'images/team/suyoun-jo.jpg'
      }
    ];
  });
