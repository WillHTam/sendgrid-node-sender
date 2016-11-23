var sender = angular.module('sender', [])

sender.controller('sendController', function sendController($scope, $http, $location, $window) {

  $scope.sendMail = function () {
    var data = {
      userEmail: $scope.userEmail
    }
    $http({
      method: 'POST',
      url: 'http://localhost:3000/',
      data: data
    }).success( function (data) {
      console.log(data)
      console.log('suckses')
    })
  }

})
