(function() {
    'use strict'

    angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        var service = this;

        // array that will contain the categories retrieved via API
        service.categories = [];

        // array that will contain the menu_items of a specific category, retrieved via API
        service.itemsCat = [];

        // returns a promise; gets all the menu categories available
        service.getAllCategories = function() {

            // with $http({object with params}) I make a request, when data arrives I use the 'result' and save it in a variable of the service. 
            let categories = $http({
                method: 'GET',
                url: (ApiBasePath + '/categories.json')
            })
            .then(function(result) {
                service.categories = result.data;
                console.log("categories: ", result.data);
                // just logging in console if for some reasons no data has been found
                if (service.categories.length === 0) console.log("No categories found!!");

                return service.categories;
            });           
            return categories;
        };

        // returns a promise; gets al the items for the category selected (not by cat.name but by category shortname)
        service.getItemsForCategory = function(categoryShortName) {
            let itemsForCategory = $http({
                method: 'GET',
                url: (ApiBasePath + '/menu_items.json'),
                params: {
                    category: categoryShortName
                }
            })
            .then(function(result) {
                service.itemsCat = result.data;
                console.log("items for category" , categoryShortName, ": " , service.itemsCat);

                if (service.itemsCat.length === 0) console.log("No elements for this category!!");

                return service.itemsCat;
            });

            return itemsForCategory;
        };
    };
})();