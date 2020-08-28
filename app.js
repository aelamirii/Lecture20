(function () {
'use strict';

angular.module('ShoppingListApp', [] )
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListService', ShoppingListService );


ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
  var itemAdder = this;

  itemAdder.itemName = "";
  itemAdder.itemQuantity = "";

  itemAdder.addItem = function () {
    ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  }
}


ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var showList = this;

  showList.items = ShoppingListService.getItems();

  showList.removeItem = function (ItemIndexindex) {
    ShoppingListService.removeItem(ItemIndexindex);
  }

}


// Service as a function constructor   .... = this;
function ShoppingListService() {

  var service = this;

 // List of shopping items
  var items = [];


  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };

    items.push(item);
  };

  service.getItems = function () {
    return items;
  };

  service.removeItem = function (indexItem) {
    items.splice(indexItem, 1);
  }

}







})();
