/**
 * Created by kennylu on 9/8/15.
 */

angular.module('myApp').controller('CauseController', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {


  $http.get('/singlecause?where&id=' + $stateParams.causeId)
    .then(function(data) {


      $scope.causeData = data.data;

      console.log('CAUSE DATA: ' + JSON.stringify($scope.causeData));


      if (data.data.organizations.length%4 == 0) {
        $scope.organizationColType = 'col-md-3';
      } else if (data.data.organizations.length%3 == 0) {
        $scope.organizationColType = 'col-md-4';
      } else if (data.data.organizations.length%2 == 0) {
        $scope.organizationColType = 'col-md-6';
      } else {
        $scope.organizationColType = 'col-md-12';
      }

      console.log('ORG COL: ' + $scope.organizationColType)


    }, function(data) {

    });


}]);
