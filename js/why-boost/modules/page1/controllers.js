'use strict';

var app = angular.module('Page1');

app.controller('HomeController', ['$scope','$rootScope','config', function($scope,$rootScope,config) {

	$scope.version = config.appVersion;
	$scope.value = 0;

	$scope.init = function() {
		console.log('called init()');					                                              
    };

    $scope.do = function() {
    	$scope.value = $scope.value + 1;
    	$rootScope.$broadcast("current-version-is",$scope.version);
    }	

}]);

app.controller('VersionController', ['$scope','config', function($scope, config) {

	$scope.version = config.appVersion; 

	$scope.$on('current-version-is', function  (event,data) {
		console.log("got current-version-is: " + data);
		$scope.version = $scope.version + 1;
	});		          		

}]);	

