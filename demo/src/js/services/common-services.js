'use strict'

var app = angular.module("service-module",[]);
app.service("ageService",function(myFactory){
	
	//injecting factory in service
	
	this.marriageStatus = myFactory;
	this.age = 25;
	
	this.marriageStatusFunction = function(){
		return this.marriageStatus;
	}
});

app.service("locationService",function(){
	
	this.location = "Pune";
	this.years = 0.5;
});

    