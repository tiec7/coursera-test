(function() {
    'use strict'

    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['SignUpService'];
    function MyInfoController(SignUpService) {
        var $ctrl = this;

        $ctrl.userInfo = SignUpService.getUserData();

        $ctrl.userDataIsEmpty = function () {
            return angular.equals($ctrl.userInfo,{});
        }

        // in $ctrl.userInfo.favDishDetails are stored all details of the favourite dish, to pass to the component
        console.log("user info: " , $ctrl.userInfo);
        console.log("user info JSON: " , JSON.stringify($ctrl.userInfo, null, 4));
    }

})();