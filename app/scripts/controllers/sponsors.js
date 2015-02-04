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
          img: 'images/sponsors/mbna.jpg'
        }
      ],
      silver: [
        {
          url: 'http://startupsource.ca/',
          img: 'images/sponsors/airdberlis.png'
        },
        {
          url: 'https://uwaterloo.ca/conrad-business-entrepreneurship-technology/',
          img: 'images/sponsors/conrad.png'
        }
      ],
      bronze: [
        {
          url: 'http://www.rbc.com/careers/campus-recruitment/technology-operations.html',
          img: 'images/sponsors/rbc.png'
        },
        {
          url: 'http://www.mckinsey.com/',
          img: 'images/sponsors/mckinseyco.png'
        },
        {
          url: 'http://www.shopify.ca/',
          img: 'images/sponsors/shopify.png'
        },
        {
          url: 'http://www.accenture.com/us-en/pages/index.aspx',
          img: 'images/sponsors/accenture.gif'
        },
        {
          url: 'http://www.rlsolutions.com/',
          img: 'images/sponsors/rl-solutions.jpg'
        }
      ],
      supporters: [
        {
          url: 'http://www.peo.on.ca/',
          img: 'images/sponsors/peo.png'
        },
        {
          url: 'http://sabetaip.com/',
          img: 'images/sponsors/sabeta-ip.svg'
        },
        {
          url: 'http://www.sustainalytics.com/',
          img: 'images/sponsors/sustainalytics.jpg'
        }
      ]
    };
  });
