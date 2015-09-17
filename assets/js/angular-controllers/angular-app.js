/**
 * Created by kennylu on 9/3/15.
 */


angular.module('myApp',['ui.router', 'ui.bootstrap', 'ngAnimate', 'ngRoute'])


  .config(['$stateProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '/partials/homepage.ejs',
          controller: 'HomeController'
        })
        .state('cause', {
          url: '/cause:causeId',
          templateUrl: '/partials/cause.ejs',
          controller: 'CauseController'
        })
        .state('mockCMS', {
          url: '/mockCMS',
          templateUrl: '/partials/mockCMS.ejs',
          controller: 'MockCMSController'
        })
        .state('CMScause', {
          url: '/CMScause',
          templateUrl: '/partials/causeCMS.ejs',
          controller: 'CauseCMSController'
        })
        .state('about', {
          url: '/about',
          templateUrl: '/partials/aboutPage.ejs',
          controller: 'AboutController'
        })
        .state('organizationCMS', {
          url: '/organizationCMS',
          templateUrl: '/partials/organizationCMS.ejs',
          controller: 'OrganizationCMSController'
        })
        .state('otherwise', {
          url: '*path',
          templateUrl: '/partials/homepage.ejs',
          controller: 'HomeController'
        })



    }]);



