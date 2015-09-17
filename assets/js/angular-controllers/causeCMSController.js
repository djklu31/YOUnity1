/**
 * Created by kennylu on 9/10/15.
 */

angular.module('myApp').controller('CauseCMSController', ['$scope', '$http', function($scope, $http) {

  $scope.count = 0;

  organizationArray = [];

  $http.get('/singlecause/searchimages')
    .then(function(response) {

      $scope.causeImagesOption = response.data;
      console.log('cause images: ' + JSON.stringify(response.data));

    });

  $http.get('/singlecause/searchlogos')
    .then(function(response) {

      $scope.organizationOptions = response.data;

      console.log('organization images: ' + JSON.stringify(response.data));

    });

  $http.get('/singlecause')
    .then(function(response) {

      $scope.cause = response.data;

      console.log(JSON.stringify($scope.cause));
    }, function(response) {

    });

  $scope.submitCause = function() {

    var sendData = {
      causeImage: $scope.causeImage,
      causeName: $scope.causeName,
      causeDesc: $scope.causeDesc,
      donationGoal: $scope.donationGoal,
      lastDay: $scope.lastDay
    };

    $http.post('/singlecause/createcause', sendData)
      .then(function(response) {

      }, function(response) {

      });

  };

  $scope.destroyCause = function(id) {

    console.log('JAMMIN BRO: ' + id);

    $http.post('/singlecause/destroycause', {id: id})
      .then(function(data) {

        window.location.reload();

      }, function(data) {

      });

  }

  $scope.addOrganization = function() {




  }

}]);
