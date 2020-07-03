// this controller refers to the html page categories.template.html
(function () {
    'use strict'

    angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

    // list comes from 'routes.js', from the state used to create the categories page: it's the variable in the 'resolve' object
    CategoriesController.$inject = ['categoriesRetrieved'];
    function CategoriesController (categoriesRetrieved) {
        var categoriesCtrl = this;

        categoriesCtrl.categoriesRetrieved = categoriesRetrieved;
    }
})();