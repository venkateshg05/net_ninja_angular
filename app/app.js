var myNinjaApp = angular.module('myNinjaApp',[]);

myNinjaApp.controller('NinjaController', ['$scope', function($scope){

  $scope.ninjas = [
    {
      name:"Joshi",
      belt:"Green",
      rate:300
    },
    {
      name:'Yada',
      belt:'Red',
      rate:30
    },
    {
      name:'Neo',
      belt:'Black',
      rate:3000
    }
  ];

}]);
