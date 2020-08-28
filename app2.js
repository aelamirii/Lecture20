(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListService', ShoppingListService);

ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
  var ItemAdder = this;

  ItemAdder.ItemName = "";
  ItemAdder.ItemQuantity = "";

  ItemAdder.addItem = function () {
    ShoppingListService.addItem(ItemAdder.ItemName, ItemAdder.ItemQuantity);
  };

}


ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {

  var ShowItem = this;

  ShowItem.getItems = ShoppingListService.getItem();

  ShowItem.removeItem = function (index) {
    ShoppingListService.removeItem(index);
  };

}



function ShoppingListService() {

  var service = this;

  // List of Shopping Items
  var Items = [];

  service.addItem = function (itemName, itemQuantity) {

    var item = {
      name: itemName,
      quantity: itemQuantity
    };

    Items.push(item);

  };

  service.getItem = function () {
    return Items;
  }

  service.removeItem = function (ItemIndex) {
    Items.splice(ItemIndex, 1);
  }


}



})();
