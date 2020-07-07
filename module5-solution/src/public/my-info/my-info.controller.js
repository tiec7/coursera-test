(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['MyInfoService'];
    function MyInfoController(MyInfoService) {
        var $ctrl = this;

        $ctrl.dishChecked = false;
        $ctrl.isUserDataSaved = false;
        
        $ctrl.submit = function(shortName) {
            // calling the service function for checking favorite dish
            var promise = MyInfoService.getShortNameItem(shortName);

            promise.then(function(response) {
                $ctrl.found = response;
                //console.log("controller: response " + JSON.stringify($ctrl.found, null, 4));
                $ctrl.foundComment = response.myResult;
                $ctrl.dishChecked = true;

                // console.log('favdish: ', $ctrl.reg.user.favoriteDish);
                // console.log(angular.equals($ctrl.found.data.short_name, $ctrl.reg.user.favoriteDish));
                // console.log($ctrl.found.status === 200);
                if ( $ctrl.found.status === 200 && angular.equals($ctrl.found.data.short_name, $ctrl.reg.user.favoriteDish)  ) {
                    MyInfoService.storeUserData($ctrl.reg.user);
                    $ctrl.isUserDataSaved = true;
                }

                //console.log(MyInfoService.getUserData());
            })
            .catch(function(error) {
                console.log(error);
            })

            
        }
    }
        
})();