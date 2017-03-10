(function () {
'use strict';

angular.module('restaurant')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http','DataService'];
function SignUpController($http,DataService) {
  var signup = this;

  signup.submit = function() {
  	$http({
  		url: "https://aleco-course5.herokuapp.com/menu_items/"+signup.favorite+".json",
  	}).then(function successCallback(response) {
    	signup.invalid_favorite = false;
    	DataService.save(signup.first_name,signup.last_name,signup.email,signup.phone,signup.favorite);
    	signup.saved = true;
  	}, function errorCallback(response) {
    	signup.invalid_favorite = true;
    	signup.saved = false;
  	});
  };
}

})();
