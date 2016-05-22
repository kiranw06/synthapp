'use strict';

/**
 * @ngdoc function
 * @name synthappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the synthappApp
 */
angular.module('synthappApp')
  .controller('PatchesCtrl', function ($scope, $localStorage) {

  	$scope.storage = $localStorage;
  	


  	//$scope.savePatch = function ($scope.testaudio) {

  		

  	// 	 if (!$localStorage.savePatch){
   // 		    $localStorage.savePatch = [saveData];
   // 			} else {
   // 			    // We have already saved some cities. 
   // 			    // Check to make sure we haven't already saved the current city.
   // 			    var save = true; // Initialize the save decision variable.
   // 			    // Use this loop to check if we've already saved the city.
   // 			    for (var i=0; i < $localStorage.savePatch.length; i++){
   // 			        if ($localStorage.savePatch[i]. == displayText) {
   // 			            // This is a duplicate, so don't save (variable set to false).
   // 			            save = false;
   // 			        }
   // 			    }
   // 			    if (save==true){
   // 			        $localStorage.savePatch.push(saveData);
   // 			    } else {
   // 			        console.log('patch already saved');
   // 			    }
   // 			}
  	// 	}



  
  });