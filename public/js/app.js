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
          .state('macbook-pro', {
            url: '/macbook-pro',
            templateUrl: 'templates/macbook-pro-nav.html'
          })
          .state('macbookProModel', {
            url: '/macbook-pro/:model',
            templateUrl: 'templates/macbook-pro.html',
            controller: 'macbookProCtrl'
          })
          .state('macbook-pro-retina', {
            url: '/macbook-pro-retina',
            templateUrl: 'templates/macbook-pro-retina-nav.html'
          })
          .state('macbookProRetinaModel', {
            url: '/macbook-pro-retina/:model',
            templateUrl: 'templates/macbook-pro-retina.html',
            controller: 'macbookProRetinaCtrl'
          })
          .state('macbook-air', {
            url: '/macbook-air',
            templateUrl: 'templates/macbook-air-nav.html'
          })
          .state('macbookAirModel', {
            url: '/macbook-air/:model',
            templateUrl: 'templates/macbook-air.html',
            controller: 'macbookAirCtrl'
          })
          .state('imac', {
            url: '/imac',
            templateUrl: 'templates/imac-nav.html'
          })
          .state('iMacModel', {
            url: '/imac/:model',
            templateUrl: 'templates/imac.html',
            controller: 'imacCtrl'
          })
          .state('macbook-simple', {
            url: '/macbook-simple',
            templateUrl: 'templates/macbook-simple-nav.html'
          })
          .state('macbookSimpleModel', {
            url: '/macbook-simple/:model',
            templateUrl: 'templates/macbook-simple.html',
            controller: 'macbookSimpleCtrl'
          })
    }]);