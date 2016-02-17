'use strict';

var hangmanApp = angular.module('hangmanApp', []);


var maxPowerUps = 4;
var playerPowerUp = 1;
var totalPowerUps = 0;

var maxBombs = 3;
var totalBombs = 0;


/* App Module */

/* var helloWorldApp = angular.module('helloWorldApp', [
  'ngRoute',
  'helloWorldControllers'

]);

*/



// TEST VOOR ANGULAR !!!



/*
hangmanApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'partials/main.html',
      controller: 'MainCtrl'
    }).when('/show', {
      templateUrl: 'partials/show.html',
      controller: 'ShowCtrl'
    });

    $locationProvider.html5Mode(true).hashPrefix('!');
  }]);

*/