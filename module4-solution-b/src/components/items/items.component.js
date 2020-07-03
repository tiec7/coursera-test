(function() {
    'use strict';

    angular.module('MenuApp')
    .component('itemDetail', {
        templateUrl: 'src/menuapp/templates/component.items.template.html',
        bindings: {
            itemsDetail: '<'
        }
    })
})();