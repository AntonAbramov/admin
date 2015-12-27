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
          .state('iphone', {
            url: '/iphone',
            templateUrl: 'templates/iphone-nav.html'
          })
          .state('iphoneModel', {
            url: '/iphone/:model',
            templateUrl: 'templates/iphone.html',
            controller: 'iphoneCtrl'
          })
          .state('ipad', {
            url: '/ipad',
            templateUrl: 'templates/ipad-nav.html'
          })
          .state('ipadModel', {
            url: '/ipad/:model',
            templateUrl: 'templates/ipad.html',
            controller: 'ipadCtrl'
          })
          .state('macbook', {
            url: '/macbook',
            templateUrl: 'templates/macbook-nav.html'
          })
          .state('macbookModel', {
            url: '/macbook/:model',
            templateUrl: 'templates/macbook.html',
            controller: 'macbookCtrl'
          })
    }]);