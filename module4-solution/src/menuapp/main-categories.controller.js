(function () {
    'use strict'

    angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

    // list comes from 'routes.js', from the state used to create the categories page: it's the variable in the 'resolve' object
    CategoriesController.$inject = ['list'];
    function CategoriesController (list) {
        var categoriesCtrl = this;

        categoriesCtrl.list = list;
    }
})();