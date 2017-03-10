(function () {
'use strict';

angular.module('restaurant')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['$http','DataService'];
function MyInfoController($http,DataService) {
  var myinfo = this;

  var info = DataService.read()
  .then(function (result) {
    myinfo.first_name = result.first_name;
    myinfo.last_name = result.last_name;
    myinfo.email = result.email;
    myinfo.phone = result.phone;
    myinfo.favorite = result.favorite;
    myinfo.title = result.title;
    myinfo.description = result.description;
  });
}

})();
