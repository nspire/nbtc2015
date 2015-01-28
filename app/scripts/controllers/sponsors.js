'use strict';

/**
 * @ngdoc function
 * @name nbtc2015App.controller:SponsorsCtrl
 * @description
 * # SponsorsCtrl
 * Controller of the nbtc2015App
 */
angular.module('nbtc2015App')
  .controller('SponsorsCtrl', function ($scope) {
    $scope.sponsors = {
      gold: [
        {
          url: 'http://www.mbna.ca/',
          img: 'images/mbna.jpg'
        }
      ],
      silver: [
        {
          url: 'http://startupsource.ca/',
          img: 'images/airdberlis.png'
        },
        {
          url: 'https://uwaterloo.ca/conrad-business-entrepreneurship-technology/',
          img: 'images/conrad.png'
        }
      ],
      bronze: [
        {
          url: 'http://www.peo.on.ca/',
          img: 'images/peo.png'
        },
        {
          url: 'http://www.rbc.com/careers/campus-recruitment/technology-operations.html',
          img: 'images/rbc.png'
        },
        {
          url: 'http://www.mckinsey.com/',
          img: 'images/mckinseyco.png'
        },
        {
          url: 'http://www.shopify.ca/',
          img: 'images/shopify.png'
        },
        {
          url: 'http://www.accenture.com/us-en/pages/index.aspx',
          img: 'images/accenture.gif'
        },
        {
          url: 'http://www.rlsolutions.com/',
          img: 'images/rl-solutions.jpg'
        }
      ],
      supporters: [
        {
          url: 'http://sabetaip.com/',
          img: 'images/sabeta-ip.svg'
        },
        {
          url: 'http://www.sustainalytics.com/',
          img: 'images/sustainalytics.jpg'
        }
      ]
    };
  });
