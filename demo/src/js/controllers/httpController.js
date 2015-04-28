(function (){
	'use strict';

	var httpCtrlModule = angular.module('httpCtrlModule',[]);
	// Controller with dependencies on Angular's $http service and promises
    httpCtrlModule.controller('CtrlHttp', function ($scope,$rootScope,ageService,locationService,myFactory) {
		
		$scope.maritalStatus = myFactory;
		$rootScope.name1 = "Maitri Vora";
		$rootScope.location1 = locationService.location;
    });
})();