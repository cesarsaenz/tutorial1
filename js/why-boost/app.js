(function() {

var config =  {  
    appVersion: .7
}; 

// declare modules
angular.module('Page1', []).constant('config',config);
angular.module('Page2', []).constant('config',config);


var app = angular.module('why-boost', ['Page1','Page2','ngRoute','ngCookies','ngResource'])

.constant('config', config)

.config(['$routeProvider', function($routeProvider) {
	$routeProvider    

    .when('/', {
        controller: 'HomeController',
        templateUrl: '/js/why-boost/modules/page1/views/index.html',
    })

    .when('/page2', {
        controller: 'HomeController',
        templateUrl: '/js/why-boost/modules/page2/views/index.html',
    })        

	.otherwise({ redirectTo: '/'});
}])

.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
        	//console.log("current location " + $location.path());
        });
    }]);

})();		