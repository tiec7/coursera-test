(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemDetailController', ItemDetailController);


  ItemDetailController.$inject = ['itemsRetrieved', '$stateParams'];
  function ItemDetailController(itemsRetrieved, $stateParams) {
    //console.log("itemdetailscontroller launched")
    var itemDetailCtrl = this;

    itemDetailCtrl.itemsListForThisCategory = itemsRetrieved;
    console.log("qui ", itemsRetrieved, "e qui ", $stateParams )
    // var item = itemdet[$stateParams.categoryShortName];
    // itemDetail.name = item.name;
    // itemDetail.quantity = item.quantity;
    // itemDetail.description = item.description;
  }

})();
