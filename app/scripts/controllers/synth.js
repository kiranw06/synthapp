'use strict';

/**
 * @ngdoc function
 * @name synthappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
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
    $scope.testaudio= function(){
     // Synthapp Main Scripts


        //TODO Create an Audio Context
        
        var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        //TODO Create Audio Source
        
          // Oscilator
            oscillator = audioCtx.createOscillator();
            // Oscilator (Waveform)
            oscillator.type = 'sine'; 
            
          //TODO Volume Node 
            var gainNode = audioCtx.createGain();
        
        
        //TODO Make Controll Variables
        
            var maxFreq = 4000;
            var maxVol = 1;
            
            //TODO Set Key/Frequencey
            var initialFreq = 261.6;
            var initialVol = 0.05; 
        
            // Set equal to control values  
            gainNode.gain.value = initialVol;
            oscillator.frequency.value = initialFreq;
        
        
        //TODO Create Effects Nodes
        
         
        
        // Create an array for octave 2-7 with http://www.seventhstring.com/resources/notefrequencies.html as reference
        
        
        
        
        
        //TODO Connect Source and Desitination
          oscillator.connect(gainNode);
          gainNode.connect(audioCtx.destination);
        
        
        
        // Call Function
         
        oscillator.start();
        
        console.log(oscillator.start);
    };

  });