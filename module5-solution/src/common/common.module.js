(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://api-ristorante.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
