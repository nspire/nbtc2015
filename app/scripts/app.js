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
      .when('/ecJudges', {
        templateUrl: 'views/ecjudges.html',
        controller: 'EcjudgesCtrl'
      })
      .when('/ecFaq', {
        templateUrl: 'views/ecfaq.html',
        controller: 'EcfaqCtrl'
      })
      .when('/ecQualify', {
        templateUrl: 'views/ecqualify.html',
        controller: 'EcqualifyCtrl'
      })
      .when('/subsidies', {
        templateUrl: 'views/subsidies.html',
        controller: 'SubsidiesCtrl'
      })
      .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
