(function () {
    'use strict';
    
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    // controller: simply manages data towards frontend
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        let ctrl = this;

        ctrl.warning = "Nothing found.";

        ctrl.searchMenuItems = function (searchTerm) {
            var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

            promise.then(function (response) {
                // results will be stored in this property!
                ctrl.found = response;

            })
            .catch(function (error) {
              console.log(error);
            })

        };

        ctrl.removeItem = function(itemIndex) {
            MenuSearchService.removeItem(itemIndex);
        }

    };

    // service for getting results
    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        let service = this;
        service.foundItems = [];
        service.getMatchedMenuItems = function(searchTerm) {

            // retrieves all the menu items
            let result = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
              })

              // when results arrives, it filters by searchTerm
              .then(function(result) {

                    service.foundItems = result.data.menu_items.filter(iFilter);

                    // a small function that checks elements of the array and filters using searchTerm
                    function iFilter(elem) {
                        return (elem.description).includes(searchTerm);
                    }

                    if (service.foundItems.length === 0) console.log("Search with word", searchTerm ,"done, nothing found!");

                    return service.foundItems;
              });

            return result;
        };

        service.removeItem = function(idx) {
            service.foundItems.splice(idx, 1);
            console.log("removed! now array is ", service.foundItems);
        };
    }

    // directive for displaying results
    function FoundItemsDirective() {
        var ddo = {
          templateUrl: 'foundItems.html',
          scope: {
            items: '<',
            onRemove: '&',
            myWarning: '@warning'
          },
          controller: FoundItemsDirectiveController,
          controllerAs: 'foundItemsDirCtrl',
          bindToController: true
        };
      
        return ddo;
    }

    function FoundItemsDirectiveController() {
        let foundItemsDirCtrl = this;

    }

})();