(function () {
'use strict';

angular.module('restaurant')
.service('DataService', DataService);

DataService.$inject = ['$http'];
function DataService($http) {
  var service = this;

  service.save = function(first_name,last_name,email,phone,favorite) {
  	service.first_name = first_name;
    service.last_name = last_name;
    service.email = email;
    service.phone = phone;
    service.favorite = favorite;
  };

  service.read = function() {
    return $http({
      url: "https://aleco-course5.herokuapp.com/menu_items/"+service.favorite+".json",
    }).then(function successCallback(response) {
      service.title = response.data.name;
      service.description = response.data.description;
      return {
        first_name: service.first_name,
        last_name: service.last_name,
        email: service.email,
        phone: service.phone,
        favorite: service.favorite,
        title: service.title,
        description: service.description
      };
    });
  };
}

})();
