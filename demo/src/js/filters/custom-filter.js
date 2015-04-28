'use strict'

var app = angular.module("custom-filter",[]);
app.filter("myFilter",function(){
	return function(name){
		if(name){
			if(name === "Mayank")
			{
				return "Mayank Vora";	
			}
			else if(name === "Maitri"){
				return "Maitri Pandit";
			}
			
		}
	};
});
app.filter("mySecondFilter",function(){
	return function(age){
		if(age){
			if(age<25){
				return age+" Years";
			}
			else if(age>25) {
					
				return age+" Years and older";
			}
			else 
			{
				return "error while filtering"; 
			}	
		}
	}
});

    