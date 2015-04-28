(function (){
	'use strict';
	//console.log('category js loaded');

	var myMod = angular.module("my-Module",[]);
	
	var mainCtrl = myMod.controller("MainCtrl", function($scope,$rootScope,ageService,locationService,$state){

		console.log("in Main Ctrl");
		var sessionId = localStorage.getItem("sessionId");

		console.log("sessionId is "+sessionId);
		if(sessionId==""||sessionId==null)
		{
			console.log("Going to login");
			$state.go('login');
		}
		$scope.maritalStatus = ageService.marriageStatusFunction();

		$rootScope.name = "Mayank Vora";
		$scope.location = locationService.location; //sharing service data
				
		$scope.changePerson = function(){
			$scope.changeToPerson2();
		}
		$scope.changeToPerson2 = function(){
			//for changing the state
			$state.go('person2');
		}
	});
})();