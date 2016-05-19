'use strict';

/**
 * @ngdoc function
 * @name synthappApp.controller:SynthCtrl
 * @description
 * # SynthCtrl
 * Controller of the synthappApp
 */
 

angular.module('synthappApp')
  .controller('SynthCtrl', function ($scope) {
    // $scope.current = current.query();

    // $scope.refreshCurrent = function(){
    //     $scope.current = current.query({
    //         audioCtx: $scope.webkitAudioContext
    //     });
    // };
    $scope.displayButton="Play";


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
            $scope.oscillator = audioCtx.createOscillator();
            // Oscilator (Waveform)
            //$scope.oscillator.type = 'sine'; 
            
          // Volume Node 
            $scope.gainNode = audioCtx.createGain();

            $scope.maxVol = 1;
            $scope.initialVol = 0.05; 
        
        
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
            $scope.oscillator.frequency.value = $scope.initialFreq;
        
        
        //TODO Create Effects Nodes
        
         
        
        // Create an array for octave 2-7 with http://www.seventhstring.com/resources/notefrequencies.html as reference
        
        
        
        
        
        //TODO Connect Source and Desitination
          $scope.oscillator.connect($scope.gainNode);
          $scope.gainNode.connect(audioCtx.destination);
        
        
        
        // Call Function
        
        console.log($scope.oscillator.start);
    };
    return;
  });