'use strict';

/**
 * @ngdoc service
 * @name nbtc2015App.blurbService
 * @description
 * # blurbService
 * Service in the nbtc2015App.
 */
angular.module('nbtc2015App')
  .service('blurbService', function ($sce) {

    var service = {
      // 'content' object definition is flexible
      // the only data needed to make this service work is 'content.blurb'
      content: {},
      isOpen: false,
      show: function (content) {
        service.isOpen = true;
        // trust blurb html & allow template usage
        if (content && content.blurb && (typeof content.blurb === 'string')) {
          content.blurb = $sce.trustAsHtml(content.blurb);
        }
        service.content = content ? content : {};
      },
      hide: function () {
        service.isOpen = false;
      }
    };

    return service;
  });
