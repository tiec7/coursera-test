(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['SignUpService'];
    function SignUpController(SignUpService) {
        var $ctrl = this;

        $ctrl.dishChecked = false;
        $ctrl.isUserDataSaved = false;
        
        $ctrl.submit = function(shortName) {
            // calling the service function for checking favorite dish
            var promise = SignUpService.getShortNameItem(shortName);

            promise.then(function(response) {
                $ctrl.found = response;
                //console.log("controller: response " + JSON.stringify($ctrl.found, null, 4));
                // comment added manually in service
                $ctrl.foundComment = response.myResult;
                $ctrl.dishChecked = true;

                // console.log('favdish: ', $ctrl.reg.user.favoriteDish);
                // console.log(angular.equals($ctrl.found.data.short_name, $ctrl.reg.user.favoriteDish));
                // console.log($ctrl.found.status === 200);
                if ( $ctrl.found.status === 200 && angular.equals($ctrl.found.data.short_name, $ctrl.reg.user.favoriteDish)  ) {
                    // adding dish details to user data, to save it and retrieve with my-info page
                    $ctrl.reg.user.favDishDetails = $ctrl.found.data;

                    // save user data inserted, in memory
                    SignUpService.storeUserData($ctrl.reg.user);

                    $ctrl.isUserDataSaved = true;
                }

                else {
                    $ctrl.isUserDataSaved = false;
                }

                //console.log(SignUpService.getUserData());
            })
            .catch(function(error) {
                console.log(error);
            })

            
        }
    }
        
})();