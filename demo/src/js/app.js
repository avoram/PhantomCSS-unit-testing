'use strict';

var app = angular.module("app", ['ui.router','myCutomDirectives','custom-filter','my-Module',
    'httpCtrlModule','service-module','factory-module','ngRoute']);

app.config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider,$urlRouterProvider,$locationProvider){
    $urlRouterProvider.otherwise('login');
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'src/views/person1.html',
		controller:'MainCtrl'
	}).
	state('person2',{
		url:'/person2',
		templateUrl:'src/views/person2.html',
		controller:'CtrlHttp'
	}).
	state('simpleController',{
		url:'/simpleController',
		templateUrl:'src/views/simpleView.html',
		controller:'simpleController'
	}).
    state('login',{
       url:'/login',
       templateUrl:'src/views/login.html',
       controllerAs:'loginCtrl',
       controller:'loginController'
    });

}]);
    