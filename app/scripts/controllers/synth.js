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
  	

    $scope.testaudio = function(){
     // Synthapp Main Scripts


        //TODO Create an Audio Context
        
        var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        //TODO Create Audio Source
        
          // Oscilator
            $scope.oscillator = audioCtx.createOscillator();
            // Oscilator (Waveform)
            //$scope.oscillator.type = 'sine'; 
            
          //TODO Volume Node 
            $scope.gainNode = audioCtx.createGain();
        
        
        //TODO Make Controll Variables
        
            var maxFreq = 4000;
            var maxVol = 1;
            
            //TODO Set Key/Frequencey
            var initialFreq = 261.6;
            var initialVol = 0.05; 
        
            // Set equal to control values  
            $scope.gainNode.gain.value = initialVol;
            $scope.oscillator.frequency.value = initialFreq;
        
        
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