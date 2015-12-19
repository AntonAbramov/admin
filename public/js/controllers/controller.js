var app = angular.module('app', []);
app.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {

  var refresh = function () {
    $http.get('/commentlist').success(function (response) {
      console.log('I got a data I requested');
      $scope.commentlist = response;
      $scope.comment = '';
    });
  };

  refresh();


  $scope.addComment = function () {
    console.log('start');
    console.log($scope.comment);
    console.log('end');

    var d = new Date(),
        options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          timezone: 'UTC'
        };
    var currentDate = d.toLocaleString("ru", options);

    $scope.comment.date = currentDate;
    $http.post('/commentlist', $scope.comment).success(function (response) {
      console.log(response);
      refresh();
    });
  }

  $scope.remove = function (id) {
    console.log(id);
    $http.delete('/commentlist/' + id).success(function (response) {
      refresh();
    });
  }

  $scope.edit = function (id) {
    console.log(id);
    $http.get('/commentlist/' + id).success(function (response) {
      $scope.comment = response;
    });
  }

  $scope.update = function (id) {
    console.log($scope.comment._id);
    $http.put('/commentlist/' + $scope.comment._id, $scope.comment).success(function (response) {
      refresh();
    });

  }

  $scope.deselect = function () {
    $scope.comment = "";
  }

}])
