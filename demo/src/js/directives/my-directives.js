(function(){

'use strict'

var app = angular.module("myCutomDirectives", []);
app.directive('mayankInfo',function(){
	
		return{
		templateUrl:'src/includes/mayank-hobby.html',
		restrict:'E',
		link:function(scope,elem,attrs){ // link function will use JQlite to trigger the mouseover event for that we have included jquery first.
										// The link function is mainly used for attaching event listeners to DOM elements, watching model properties for changes, and updating the DOM 	
			elem.bind('mouseover',function(){
				elem.css('color', 'red');
			});
			elem.bind('mouseout',function(){
				elem.css('color', 'black');				
			});
		}
	};
})
.directive('maitriInfo',function(){
	var myDirective = {};
	myDirective.restrict = "AEC"; //Restricting it to be a attribute or element directive
	myDirective.templateUrl = 'src/includes/maitri-hobby.html';
	
	return myDirective;
})

})();