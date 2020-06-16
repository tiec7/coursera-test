(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListService', ShoppingListCheckOffService);
    

    ToBuyController.$inject = ['ShoppingListService'];
    function ToBuyController(ShoppingListService) {
        let buy = this;

        // move
        buy.moveItemToBuy = function(index) {
            ShoppingListService.moveItemToBuy(index);
        }

        // get
        buy.listToBuy = ShoppingListService.getItemsToBuy();       
    };


    AlreadyBoughtController.$inject = ['ShoppingListService'];
    function AlreadyBoughtController(ShoppingListService) {
        let bought = this;

        // get
        bought.listBought = ShoppingListService.getItemsBought();

    };
    
    // service for both controllers
    function ShoppingListCheckOffService() {
        let service = this;

        // array with items to buy
        let toBuyArray = [
            {
                name: "Bread loaf",
                quantity: "2"
            }, 
            {
                name: "Milk pack",
                quantity: "1"
            }, 
            {
                name: "Eggs",
                quantity: "12"
            }, 
            {
                name: "Apples",
                quantity: "6"
            }, 
            {
                name: "Salad",
                quantity: "3"
            }
        ];

        /* functions for the toBuy array */
        // add
        service.addItemToBuy = function (itemName, quantity) {
            let item = {
              name: itemName,
              quantity: quantity
            };

            toBuyArray.push(item);
        };
        
        // move
        service.moveItemToBuy = function (itemIndex) {
            // since "splice" returns an array of deleted elements, i'll use it
            let deleted = toBuyArray.splice(itemIndex, 1);
            boughtArray.push(deleted[0]);
        };
    
        // get
        service.getItemsToBuy = function () {
            return toBuyArray;
        };


        // array with items bought
        let boughtArray = [];

        /* functions for the bought array */
        // get
        service.getItemsBought = function () {
            return boughtArray;
        };
    }
    
    })();