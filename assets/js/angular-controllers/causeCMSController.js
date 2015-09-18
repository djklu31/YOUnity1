/**
 * Created by kennylu on 9/10/15.
 */

angular.module('myApp').controller('CauseCMSController', ['$scope', '$http', function($scope, $http) {

  $scope.count = 0;

  organizationArray = [];




  $http.get('/singlecause/searchimages')
    .then(function(response) {

      $scope.causeImagesOption = response.data;

    });

  //$http.get('/singlecause/searchlogos')
  //  .then(function(response) {
  //
  //    $scope.organizationOptions = response.data;
  //
  //    console.log('organization images: ' + JSON.stringify(response.data));
  //
  //  });

  $http.get('/organizations')
    .then(function(response) {

      $scope.organizationData = response.data;

    }, function(response) {

    })

  $http.get('/singlecause')
    .then(function(response) {

      $scope.cause = response.data;

    }, function(response) {

    });

  $scope.submitCause = function() {

    var sendData = {
      causeImage: $scope.causeImage,
      causeName: $scope.causeName,
      causeDesc: $scope.causeDesc,
      donationGoal: $scope.donationGoal,
      lastDay: $scope.lastDay,
      organizations: organizationArray
    };

    $http.post('/singlecause/createcause', sendData)
      .then(function(response) {

      }, function(response) {

      });

  };

  $scope.destroyCause = function(id) {

    $http.post('/singlecause/destroycause', {id: id})
      .then(function(data) {

        window.location.reload();

      }, function(data) {

      });

  }

  $scope.addOrganization = function() {

    organizationArray.push($scope.organizationName.id);

    console.log(organizationArray);

    $scope.count++;
  }





}]);
