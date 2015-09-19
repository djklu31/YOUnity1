/**
 * Created by kennylu on 9/16/15.
 */

angular.module('myApp').controller('OrganizationCMSController', ['$scope', '$http', function($scope, $http) {

  $http.get('/organizations/searchlogos')
    .then(function(response) {
      $scope.organizationLogos = response.data;

      console.log(JSON.stringify(response.data));
    }, function(response) {

    });

  $http.get('/organizations/')
    .then(function(response) {
      $scope.organizationData = response.data;

      console.log(JSON.stringify(response.data));
    }, function(response) {

    });

  $scope.addOrganization = function() {


    var sendData = {
      logo: $scope.organizationLogo,
      name: $scope.organizationName,
      description: $scope.organizationDesc
    };


    $http.post('/organizations/add-organization', sendData)
      .then(function(response){

      }, function(response){

      })

  };

  $scope.destroyOrganization = function(id) {

    console.log('ID IS: ' + id);

    $http.post('/organizations/destroy-organization', {id: id})
      .then(function(response) {

        window.location.reload();

      }, function(response) {

      })

  };

}]);
