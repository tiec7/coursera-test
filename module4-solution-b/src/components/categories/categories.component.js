(function() {
    'use strict';

    angular.module('MenuApp')
    .component('categories', {
        templateUrl: 'src/menuapp/templates/component.categories.template.html',
        bindings: {
            categoriesList: '<'
        }
    })
})();