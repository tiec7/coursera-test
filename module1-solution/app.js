(function () {
    'use strict';
    
    angular.module('Mod1App', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope', '$filter'];

    function LunchCheckController($scope, $filter) {

        $scope.checkLunch = function() {

            // checks if lunchlist is not undefined and if true executes split function
            let lunch = ($scope.lunchList != undefined) && $scope.lunchList.split(',');

            // if lunch array is not undefined, remove all strings that contains a space, and return 
            // only not-empty elements
            if (lunch.length != undefined) {
                lunch = $filter('filter')(lunch, function(element) {
                    element = element.replace(/ /g,'');
                    return element != "";
                });
            }         

            console.log(lunch);

            switch (lunch.length) {

                case undefined:
                case 0:
                    $scope.message = 'Please enter data first';
                    $scope.messageStatus = 'Error';
                    break;

                case 1:
                case 2:
                case 3:    
                    $scope.message = 'Enjoy!';
                    $scope.messageStatus = 'Fine';
                    break;
                
                // in all other cases
                default:
                    $scope.message = 'Too much!';
                    $scope.messageStatus = 'Fine';
            }
        }
    }
    
    })();