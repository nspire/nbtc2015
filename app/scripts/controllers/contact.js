'use strict';

/**
 * @ngdoc function
 * @name nbtc2015App.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the nbtc2015App
 */
angular.module('nbtc2015App')
  .controller('ContactCtrl', function ($scope) {
    $scope.connectLinks = [
      {
        icon: 'fa-youtube',
        url: 'https://www.youtube.com/user/NspireInnovationNet'
      },
      {
        icon: 'fa-twitter',
        url: 'https://twitter.com/NspireNetwork'
      },
      {
        icon: 'fa-facebook',
        url: 'https://www.facebook.com/NspireNetwork'
      },
      {
        icon: 'fa-linkedin',
        url: 'https://www.linkedin.com/company/nspire-innovation-network'
      },
    ];
  });
