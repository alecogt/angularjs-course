(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.list = "";
  $scope.message = "";
  $scope.color = "transparent";

  $scope.checkList = function () {
  	var count = 0;
  	count = $scope.list.split(',').length;

	if($scope.list.length == 0) {  	
  		$scope.message = 'Please enter data first';
  		$scope.color = 'red';
  	}
  	else if(count<=3) {
  		$scope.message = 'Enjoy!';
  		$scope.color = 'green';
  	}
  	else {
  		$scope.message = 'Too much!';
  		$scope.color = 'green';
  	}
  };
}

})();