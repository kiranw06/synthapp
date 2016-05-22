'use strict';

/**
 * @ngdoc function
 * @name synthappApp.controller:SynthCtrl
 * @description
 * # SynthCtrl
 * Controller of the synthappApp
 */
 

angular.module('synthappApp')
  .controller('SynthCtrl', function ($scope, $localStorage, $rootScope, $routeParams) {

    $scope.storage = $localStorage;
    $scope.displayText = "";


    for (patch in $scope.storage ) {
        $scope.currentPatch == $routeParams.patchData;



    }


    // Visibility
    
    $scope.isHidden = true;
        
    $scope.showHide = function () {
        //If DIV is hidden it will be visible and vice versa.
        $scope.isHidden = $scope.isHidden ? false : true;
        $scope.isVisible = $scope.isVisible ? true : false;
    };

    

  	

    $scope.testaudio = function(){
     // Synthapp Main Scripts


        //TODO Create an Audio Context
        
        var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        // Create Audio Source
        
          // Oscilator
            $rootScope.oscillator = audioCtx.createOscillator();
            // Oscilator (Waveform)
            //$rootScope.oscillator.type = 'sine'; 
            
          // Volume Node 
            $scope.gainNode = audioCtx.createGain();

            $scope.maxVol = 1;
            $scope.initialVol = 0.00; 
        
        
            // Frequency
        
            $scope.initialFreq = 261.6;
            $scope.maxFreq = 4000;
            
            $scope.frequencyArray = {
                C: [
                    {
                        "two": 65.41,
                        "three": 130.8,
                        "four": 261.6,
                        "five": 523.3,
                        "six": 1047,
                        "seven": 2093,
                    },
                ]
            };
            
        
            // Set equal to control values  
            $scope.gainNode.gain.value = $scope.initialVol;
            $rootScope.oscillator.frequency.value = $scope.initialFreq;
        
        
        //TODO Create Effects Nodes
        
         
        
        // Create an array for octave 2-7 with http://www.seventhstring.com/resources/notefrequencies.html as reference
        
        
        
        
        
        //TODO Connect Source and Desitination
          $rootScope.oscillator.connect($scope.gainNode);
          $scope.gainNode.connect(audioCtx.destination);
        
        
        
        // Call Function
        
        
        $rootScope.oscillator.start();
    };



    $scope.savePatch = function(text) {

        var patchData = {
            'patchName': text,
            'oscillator': $rootScope.oscillator.type,
            'frequency' : $rootScope.oscillator.frequency.value
        };

        if (!$localStorage.savedPatches) {
            $localStorage.savedPatches = [];
        }
        $localStorage.savedPatches.push(patchData);


        // Patch Data 

        //localStorage.setItem(text, JSON.stringify(patchData));

        // $scope.savedPatch = $scope.patchData.patchName;

        // $scope.getPatch = $localStorage.getItem($scope.savedPatch);

    };

    return;



  });