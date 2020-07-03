(function() {
    'use strict'

    angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        var service = this;

        // array that will contain the categories retrieved via API
        service.categoriesList = [];

        // array that will contain the menu_items of a specific category, retrieved via API
        service.itemsOfACategory = [];

        // returns a promise; gets all the menu categories available
        service.getAllCategories = function() {

            // with $http({object with params}) I make a request, when data arrives I use the 'result' and save it in a variable of the service. 
            let categoriesPromise = $http({
                method: 'GET',
                url: (ApiBasePath + '/categories.json')
            })
            .then(function(result) {
                service.categoriesList = result.data;
                console.log("categories: ", result.data);
                // just logging in console if for some reasons no data has been found
                if (service.categoriesList.length === 0) console.log("No categories found!!");

                return service.categoriesList;
            });           
            return categoriesPromise;
        };

        // returns a promise; gets al the items for the category selected (not by cat.name but by category shortname)
        service.getItemsForCategory = function(categoryShortName) {
            let itemsForCategoryPromise = $http({
                method: 'GET',
                url: (ApiBasePath + '/menu_items.json'),
                params: {
                    category: categoryShortName
                }
            })
            .then(function(result) {
                service.itemsOfACategory = result.data;
                console.log("items in this category" , categoryShortName, ": " , service.itemsOfACategory);

                if (service.itemsOfACategory.length === 0) console.log("No elements for this category!!");

                return service.itemsOfACategory;
            });

            return itemsForCategoryPromise;
        };
    };
})();