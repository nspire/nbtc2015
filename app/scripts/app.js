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
      .when('/sponsors', {
        templateUrl: 'views/sponsors.html',
        controller: 'SponsorsCtrl'
      })
      .when('/speakers', {
        templateUrl: 'views/speakers.html',
        controller: 'SpeakersCtrl'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl'
      })
      .when('/gic', {
        templateUrl: 'views/gic.html',
        controller: 'GicCtrl'
      })
      .when('/ec', {
        templateUrl: 'views/ec.html',
        controller: 'EcCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
