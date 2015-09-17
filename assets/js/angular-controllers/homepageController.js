/**
 * Created by kennylu on 9/7/15.
 */


angular.module('myApp').controller('HomeController', ['$scope', '$http', function($scope, $http) {

  $scope.myInterval = 6000;

  $http.get('/homeslider').
    then(function(data) {

      //console.log('HOMEPAGE IMAGE DATA: ' + JSON.stringify(data.data));

      $scope.homeSlide = data.data;

      $scope.colorChoice = function(color) {


        if(color === 'Red') {
          return 'btn-danger';
        } else if (color === 'Blue') {
          return 'btn-primary';
        } else if (color === 'Green') {
          return 'btn-success';
        }
      }


    }, function(data) {

    });



  $http.get('/homecauses').
    then(function(data) {

      //console.log('HOMEPAGE IMAGE DATA: ' + JSON.stringify(data.data));

      $scope.homeCause = data.data;

    }, function(data) {

  });




}]);
