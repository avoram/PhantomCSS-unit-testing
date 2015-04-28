'use strict'

var app = angular.module("factory-module",[]);
app.factory("myFactory",function(locationService){
	var time = locationService.years;
	return "Married from "+time+" years";
});
    