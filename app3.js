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
    ShoppingListService.addItem(ItemAdder.ItemName , ItemAdder.ItemQuantity );

    console.log(ItemAdder);
  };


};

ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {

  var ShowItem = this;

  ShowItem.getItems = ShoppingListService.getItems();

  ShowItem.RemoveItem = function (ItemIndex) {
    ShoppingListService.removeItem(ItemIndex);
  };

};




function ShoppingListService() {

  var service = this;

  var Items = [];

  service.addItem = function (itemName, itemQuantity) {

    var item = {
      name: itemName,
      quantity: itemQuantity
    };

    Items.push(item);

  };

  service.getItems = function () {
    return Items;
  };


  service.removeItem = function (ItemIndex) {
    Items.splice(ItemIndex , 1 );
  };


}



})();
