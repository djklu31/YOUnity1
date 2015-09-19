/**
 * Created by kennylu on 9/8/15.
 */

angular.module('myApp').controller('CauseController', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {

  $http.get('/singlecause?where&id=' + $stateParams.causeId)
    .then(function(data) {


      $scope.causeData = data.data;

      console.log('CAUSE DATA: ' + JSON.stringify($scope.causeData));

    }, function(data) {

    });


}]);
