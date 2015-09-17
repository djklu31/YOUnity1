/**
 * Created by kennylu on 9/16/15.
 */

angular.module('myApp').controller('OrganizationCMSController', ['$scope', '$http', function($scope, $http) {

  $scope.addOrganization = function() {

    console.log('Add Organization');

    var sendData = {
      logo: $scope.organizationLogo,
      name: $scope.organizationName,
      description: $scope.organizationDesc
    };

    console.log('Organization DATA: ' + JSON.stringify(sendData));

    $http.post('/organizations/add-organization', sendData)
      .then(function(response){

      }, function(response){

      })

  }

}]);
