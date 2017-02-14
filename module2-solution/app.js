(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject('ShoppingListCheckOffService');
AlreadyBoughtController.$inject('ShoppingListCheckOffService');


// Controllers
function ToBuyController(ShoppingListCheckOffService) {
  var controller = this;
  var initialShoppingList = [
    {
      name: 'cookies',
      quantity: '10'
    },
    {
      name: 'chocolates',
      quantity: '3'
    },
    {
      name: 'lollipops',
      quantity: '15'
    },
    {
      name: 'packs of gummies',
      quantity: '4'
    },
    {
      name: 'biscuits',
      quantity: '12'
    },
    {
      name: 'candies',
      quantity: '20'
    }
  ];
  console.log('list ',initialShoppingList);
  ShoppingListCheckOffService.setToBuy(initialShoppingList);

  controller.list = ShoppingListCheckOffService.getToBuy();
  controller.moveToBought = function(index) {
    ShoppingListCheckOffService.moveToBought(index);
  };
}

function AlreadyBoughtController(ShoppingListCheckOffService) {
  var controller = this;
  controller.list = ShoppingListCheckOffService.getAlreadyBought();
}

// Services
function ShoppingListCheckOffService() {
  var service = this;

  var toBuy = [];
  var alreadyBought = [];

  service.moveToBought = function(index) {
    console.log('toBuy ', toBuy);
    console.log('index ', index);
    var item = {
      name: toBuy[index].name,
      quantity: toBuy[index].quantity
    };
    alreadyBought.push(item);
    toBuy.splice(index,1);
  }

  service.setToBuy = function(shoppingList) {
    toBuy = shoppingList;
  };

  service.getToBuy = function() {
    return toBuy;
  };

  service.getAlreadyBought = function() {
    return alreadyBought;
  };
}

})();