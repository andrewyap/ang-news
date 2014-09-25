/* global app:true */

'use strict';

/**
 * @ngdoc overview
 * @name angNewsApp
 * @description
 * # angNewsApp
 *
 * Main module of the application.
 */

var app = angular.module('angNewsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('page1', {
        url: '/page1',
        templateUrl: 'views/test.html',
        controller: function($scope, postsModel) {
          console.log('in controller');
          postsModel.then(function(val) {
            $scope.people = val;
          });
        }
      });
    });

  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/posts.html',
  //       controller: 'PostsCtrl'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });
