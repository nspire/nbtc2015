'use strict';

/**
 * @ngdoc function
 * @name nbtc2015App.controller:SpeakersCtrl
 * @description
 * # SpeakersCtrl
 * Controller of the nbtc2015App
 */
angular.module('nbtc2015App')
  .controller('SpeakersCtrl', function ($scope) {

    $scope.filterClass = '';
    $scope.filterSpeakers = {
      byRole: function (role) {
        $scope.filterClass = 'filter-' + role;
      },
      resetRole: function () {
        $scope.filterClass = '';
      },
      byElement: function (event) {
        $scope.filterClass = 'filter-all';
        angular.element(event.currentTarget).addClass('selected');
      },
      resetElement: function (event) {
        $scope.filterClass = '';
        angular.element(event.currentTarget).removeClass('selected');
      }
    };

    $scope.speakers = [
      {
        name: 'Ali Zahid',
        role: 'workshop',
        img: 'images/speakers/Ali-Zahid.jpg',
        blurb: ''
      },
      // {
      //   name: 'Aron Solomon',
      //   role: 'tba',
      //   img: 'images/speakers/Aron-Solomon.png',
      //   blurb: ''
      // },
      // {
      //   name: 'Harvir Bansal',
      //   role: 'tba',
      //   img: 'images/speakers/Harvir-Bansal.jpg',
      //   blurb: ''
      // },
      {
        name: 'Jean Luc David',
        role: 'workshop',
        img: 'images/speakers/Jean-Luc-David.jpg',
        blurb: ''
      },
      {
        name: 'Joseph Wilson',
        role: 'panelist',
        img: 'images/speakers/Joseph-Wilson.jpg',
        blurb: ''
      },
      {
        name: 'Kathryn Buczko',
        role: 'panelist',
        img: 'images/speakers/Kathryn-Buczko.jpg',
        blurb: ''
      },
      {
        name: 'Macy Kuang',
        role: 'workshop',
        img: 'images/speakers/Macy-Kuang.jpg',
        blurb: ''
      },
      // {
      //   name: 'Marcus Daniels',
      //   role: 'tba',
      //   img: 'images/speakers/Marcus-Daniels.jpg',
      //   blurb: ''
      // },
      {
        name: 'Mark Zimmerman',
        role: 'workshop',
        img: 'images/speakers/Mark-Zimmerman.jpg',
        blurb: ''
      },
      {
        name: 'Michael Hyatt',
        role: 'keynote',
        img: 'images/speakers/Michael-Hyatt.png',
        blurb: ''
      },
      {
        name: 'Sarah Stockdale',
        role: 'workshop',
        img: 'images/speakers/Sarah-Stockdale.jpg',
        blurb: ''
      },
      {
        name: 'Tom Emrich',
        role: 'keynote',
        img: 'images/speakers/Tom-Emrich.jpg',
        blurb: ''
      }
    ];

  });
