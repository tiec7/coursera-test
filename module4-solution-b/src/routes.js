(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
      })
    
      // Premade list page
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/menuapp/templates/categories.template.html',
        controller: 'CategoriesController as categoriesCtrl',
        resolve: {
          categoriesRetrieved: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
    
      // categoryShortName is located in stateParams, so i need to inject in the resolve function to retrieve it
      .state('itemDetail', {
        url: '/item-detail/{categoryShortName}',
        templateUrl: 'src/menuapp/templates/items.template.html',
        controller: "ItemDetailController as itemDetailCtrl",
        resolve: {
          itemsRetrieved: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      });
    
    }
    
    })();