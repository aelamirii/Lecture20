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

  var showList = this;

  showList.items = ShoppingListService.getItems();

  showList.removeItem = function (index) {
    ShoppingListService.removeItem(index);
  }
}


function ShoppingListService() {

  var service = this;

  var items = [];

  service.addItem = function (itemName, itemQuantity) {

    var item = {
        name: itemName,
        quantity: itemQuantity
    };

    items.push(item);
  };

  service.getItems = function () {
    return items;
  };

  service.removeItem = function (ItemIndex) {
    items.splice(ItemIndex , 1);
  }



}



})();
