var app = angular
    .module('app', [
      'ui.router',
      'app.directives.iphone4',
      'angular-sortable-view'
    ])
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
          })
          .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html',
            controller: 'aboutCtrl'
          })
          .state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html'
          })
          .state('iphone2', {
            url: '/iphone',
            templateUrl: 'templates/iphone.html'
          })
          .state('iphone', {
            url: '/iphone/:model',
            templateUrl: 'templates/iphone.html',
            controller: 'iphoneCtrl'
          })
    }]);