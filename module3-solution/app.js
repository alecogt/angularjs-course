(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',foundItemsDirective);

// Directives
function foundItemsDirective() {
	var ddo = {
		templateUrl: 'foundItems.html',
		scope: {
			found: '<',
			onRemove: '&'
		},
		controller: FoundItemsDirectiveController,
		controllerAs: 'foundItems',
		bindToController: true
	}
	return ddo;
}

// Controllers
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
	var controller = this;

	controller.searchTerm = "";
	controller.found = [];
	controller.nothingFound = false;

	controller.filterByText = function(searchTerm) {
		if(searchTerm.length==0) {
			controller.nothingFound = true;
		}
		else {
			var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
			promise.then(function (result) {
				controller.found = result;
				controller.nothingFound = controller.found.length==0;
			});
		}
	};

	controller.onRemove = function(index) {
		controller.found.splice(index,1);
		controller.nothingFound = controller.found.length==0;
	};
}

function FoundItemsDirectiveController() {

}

// Services
MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
	var service = this;

	service.getMatchedMenuItems = function(searchTerm) {
		var response = $http({
			url: "https://davids-restaurant.herokuapp.com/menu_items.json"
		});

		var promise = response.then(function (result) {
		    // process result and only keep items that match
		    var allItems = result.data.menu_items;
		    var foundItems = [];

		    for(var i=0;i<allItems.length;i++) {
		    	if(allItems[i].description.toLowerCase().indexOf(searchTerm)!=-1) {
		    		foundItems.push(allItems[i]);
		    	}
		    }

		    // return processed items
		    return foundItems;
		});

		return promise;
	};
}

})();