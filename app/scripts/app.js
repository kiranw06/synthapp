'use strict';

/**
 * @ngdoc overview
 * @name synthappApp
 * @description
 * # synthappApp
 *
 * Main module of the application.
 */
angular
  .module('synthappApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/synth', {
        templateUrl: 'views/synth.html',
        controller: 'SynthCtrl',
        controllerAs: 'synth'
      })
      .when('/patches', {
        templateUrl: 'views/patches.html',
        controller: 'PatchesCtrl',
        controllerAs: 'patches'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
