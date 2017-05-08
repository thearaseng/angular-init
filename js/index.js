angular.module('App', [])
  .controller('mainController', function($scope){
    $scope.lists = ['Chanpheng', 'Theara'];
    $scope.add = function(){
      $scope.lists.push($scope.name);
      $scope.name = '';
    }
  })