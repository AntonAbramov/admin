angular.module('app.directives.contactCard', [])
  .directive('contactCard', function() {
    return {
      restrict: 'E',
      templateUrl : 'templates/contactCard.html',
      controller : function ($scope) {
        //alert(1);
      }
    };
  })