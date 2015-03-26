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
        },
        {
          url: 'http://www.ge.com/ca/careers',
          img: 'images/sponsors/ge.jpg'
        },
        {
          url: 'http://www2.deloitte.com/ca/en.html',
          img: 'images/sponsors/Deloitte.gif'
        },
        {
          url: 'http://news.communitech.ca/',
          img: 'images/sponsors/Communitech_CMYK.jpg'
        },
        {
          url: 'https://helphub.me/',
          img: 'images/sponsors/helphub.png'
        },
        {
          url: 'https://www.lighthouselabs.ca/',
          img: 'images/sponsors/lighthouse-labs.png'
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
        },
        {
          url: 'http://www.eventmobi.com',
          img: 'images/sponsors/Eventmobi.png'
        },
        {
          url: 'http://www.zeitdice.com/',
          img: 'images/sponsors/zeitdice-1.png'
        },
        {
          url: 'https://www.axiomnetworks.ca/',
          img: 'images/sponsors/Axiom.png'
        },
        {
          url: 'https://bitmakerlabs.com/',
          img: 'images/sponsors/bitmaker-labs.png'
        }
      ]
    };
  });
