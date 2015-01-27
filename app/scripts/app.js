'use strict';

/**
 * @ngdoc overview
 * @name nbtc2015App
 * @description
 * # nbtc2015App
 *
 * Main module of the application.
 */
angular
  .module('nbtc2015App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/conference', {
        templateUrl: 'views/conference.html',
        controller: 'ConferenceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
