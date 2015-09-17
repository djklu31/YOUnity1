/**
 * Created by kennylu on 9/9/15.
 */

angular.module('myApp').controller('MockCMSController', ['$scope', '$http', function($scope, $http) {

  $scope.slideStyleOptions = ['Left', 'Center', 'Right'];
  $scope.slideFontColorOptions = ['White', 'Black'];
  $scope.buttonColorOptions = ['Blue', 'Red', 'Green'];

  buttonTextArray = [];
  buttonColorArray = [];

  $http.get('/homeslider/searchimages').
    then(function(response) {

      $scope.slideImageSearch = response.data;

      console.log($scope.slideImageSearch);

    }, function(response) {

    });

  $http.get('/homecauses/searchimages').
    then(function(response) {

      $scope.causeImageSearch = response.data;

      console.log($scope.causeImageSearch);

    }, function(response) {

    });


  $http.get('/homeslider').
    then(function(response) {

      $scope.destroySlider = response.data;

    }, function(response) {

    });

  $http.get('/homecauses').
    then(function(response) {

      $scope.destroyCauses = response.data;

    }, function(response) {

    });

  $scope.addButton = function() {

    buttonTextArray.push($scope.buttonText);
    buttonColorArray.push($scope.buttonColor);

  }

  $scope.submitSlide = function () {

    var sendData = {
      sliderImage: $scope.sliderImage,
      sliderName: $scope.sliderName,
      sliderDesc: $scope.sliderDesc,
      sliderStyling: $scope.sliderStyling,
      sliderFontColor: $scope.sliderFontColor,
      buttonText: buttonTextArray,
      buttonColor: buttonColorArray
    };

    $http.post('/homeslider/createhomeslide', sendData).
      then(function(response) {

        $scope.sliderStatus = response.data;

        //if(response.data === 'success') {
        //  window.location.reload();
        //}


      }, function(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });


  };

  $scope.submitCause = function () {

    var sendData = {
      causeImage: $scope.causeImage,
      causeName: $scope.causeName,
      causeDesc: $scope.causeDesc
    };

    $http.post('/homecauses/createhomecause', sendData).
      then(function(response) {

        $scope.causeStatus = response.data;

        if(response.data === 'success') {
          window.location.reload();
        }

      }, function(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  };

  $scope.destroySlide = function (id) {
    console.log('DESTROY SLIDE ID: ' + id);

    $http.post('/homeslider/destroyHomeSlide', {id: id}).
      then(function(response) {
        $scope.slideStatus = response.data;

        window.location.reload();
      })



  }

  $scope.destroyCause = function (id) {
    console.log('DESTROY CAUSE ID: ' + id)

    $http.post('/homecauses/destroyHomeCause', {id: id}).
      then(function(response) {
        $scope.causeStatus = response.data;

        window.location.reload();
      })

  }

  //CMS Controller for Causes Page



}]);
