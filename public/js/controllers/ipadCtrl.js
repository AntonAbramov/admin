angular
    .module('app')
    .controller('ipadCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
      $scope.title = "ipad " + $stateParams.model;

      var refresh = function () {

        $http.get('/ipad/' + $stateParams.model).success(function (response) {
          console.log('I got a data I requested');
          $scope.priceList = response;
          $scope.list = '';
        });
      };

      refresh();

      $scope.add = function () {
        $scope.list.idx = $scope.priceList.length;
        $http.post('/ipad/' + $stateParams.model, $scope.list).success(function (response) {
          console.log(response);
          refresh();
        });
      };

      /*$scope.update = function (id) {
        $http.put('/ipad/' + $stateParams.model + '/' + $scope.list._id, $scope.list).success(function (response) {
          refresh();
        });
      };*/

      $scope.edit = function ($scope) {
        console.log($scope);
        $scope.oldName = $scope.name;
        $scope.oldUrl = $scope.url;
        $scope.oldPrice = $scope.price;
        $scope.oldDescription = $scope.description;
      }

      $scope.update = function (obj) {
        console.log(obj);
        $http.put('/ipad/' + $stateParams.model + '/' + obj._id, obj).success(function (response) {
          //refresh();
        });
      };



      $scope.editOnCancel = function ($scope) {
        $scope.name = $scope.oldName;
        $scope.url = $scope.url;
        $scope.price = $scope.oldPrice;
        $scope.description = $scope.description;
      }

      $scope.remove = function (id) {
        var areUSure = confirm('Эй! Ты же удаляешь! Ты хорошо подумал?');
        if (areUSure) {
          $http.delete('/ipad/' + $stateParams.model + '/' + id).success(function (response) {
            refresh();
          });
        }
      };

      $scope.deselect = function () {
        $scope.list = "";
      }


      $scope.test = function ($item, $partFrom, $partTo, $indexFrom, $indexTo) {
        setTimeout(function () {
          $scope.priceList.forEach(function (obj) {
            $http.put('/ipad/' + $stateParams.model + '/' + obj._id, obj).success(function (response) {
              console.log(response);
            });
          });
        }, 10);
      }



    }]);