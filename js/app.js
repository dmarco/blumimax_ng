'use strict';


// Declare app level module which depends on filters, and services
angular.module('ramacenApp', [
	'ui.bootstrap',
  'ngRoute',
  'ramacenApp.filters',
  'ramacenApp.services',
  'ramacenApp.directives',
  'ramacenApp.controllers'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider) {
	$locationProvider.html5Mode(true).hashPrefix('!');
  $routeProvider.when('/home',                      {templateUrl: '/partials/home.html',   controller: 'HomeCtrl'});
  $routeProvider.when('/productos/:catID',          {templateUrl: '/partials/home.html',   controller: 'HomeCtrl'});
  $routeProvider.when('/productos/detalle',         {templateUrl: '/partials/detail.html', controller: 'DetailCtrl'});
  $routeProvider.when('/productos/detalle/:itemId', {templateUrl: '/partials/detail.html', controller: 'DetailCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
  //$routeProvider.therwise({templateUrl: '/partials/partial1.html'});
}]);

