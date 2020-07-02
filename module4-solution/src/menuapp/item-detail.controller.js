(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemDetailController', ItemDetailController);


  ItemDetailController.$inject = ['itemdet', '$stateParams'];
  function ItemDetailController(itemdet, $stateParams) {
    console.log("itemdetailscontroller launched")
    var itemDetailCtrl = this;

    itemDetailCtrl.itemListOfCategory = itemdet;
    console.log("qui ", itemdet, "e qui ", $stateParams )
    // var item = itemdet[$stateParams.categoryShortName];
    // itemDetail.name = item.name;
    // itemDetail.quantity = item.quantity;
    // itemDetail.description = item.description;
  }

})();
