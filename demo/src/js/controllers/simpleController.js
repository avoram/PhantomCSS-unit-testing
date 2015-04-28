'use strict'

var app = angular.module('my-Module');

app.controller('simpleController',function($scope,$http){
	var sessionId = localStorage.getItem("sessionId");
	$scope.apiData = [];
	$scope.apiDataDisplay = [];
	if(sessionId==""||sessionId==null)
	{
		$state.go('login');
	}
	$scope.origin = "Rohida";
	
	var responsePromise = $http.get('External/myData.json');
	responsePromise.success(function(data){
		$scope.objectArrary = data.results;
		console.log(JSON.stringify($scope.objectArrary));
	});

	var responsePromise1 = $http.get('https://api.mercadolibre.com/sites/MLA/search?q=book');
	responsePromise1.success(function(data){
		for(var i =0; i<6;i++)
		{
			$scope.apiDataDisplay[i] = data.results[i].title;
			console.log($scope.apiData[i]);
		}
		$scope.apiData = $scope.apiDataDisplay;
		//console.log(JSON.stringify($scope.apiData));
	});
	
	responsePromise.error(function(data){
		console.log("Ajax failed")
	});
});

    