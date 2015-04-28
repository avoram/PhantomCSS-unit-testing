/**
 * Created by vora_m on 4/24/2015.
 */

'use strict'

angular.module('app').
controller('loginController',function($scope,$state) {

        this.gotoHome = function(){
          if(this.password == "123"){
               var random = Math.random();
               localStorage.setItem('sessionId',random);
           }
           else{
               localStorage.clear('sessionId');
           }
           $state.go('home');
        }
    });