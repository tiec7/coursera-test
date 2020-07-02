(function() {
    'use strict';

    angular.module('MenuApp')
    .component('itemDetail', {
        templateUrl: 'src/menuapp/templates/item-detail.template.html',
        bindings: {
            categoriesdetail: '<'
        }
    })
})();