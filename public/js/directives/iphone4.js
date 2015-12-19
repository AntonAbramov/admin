angular.module('app.directives.iphone4', [])
  .directive('iphone4', function() {
    return {
      restrict: 'E',
      templateUrl : 'templates/iphone.html',
      controller : function () {
        alert(1);
        /*console.log('start')
        var refresh = function () {

          $http.get('/commentlist').success(function (response) {
            console.log('I got a data I requested');
            $scope.commentlist = response;
            $scope.comment = '';
          });
        }

        refresh();*/

      }
    };
  })