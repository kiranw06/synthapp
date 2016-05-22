"use strict";angular.module("synthappApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngStorage","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/synth",{templateUrl:"views/synth.html",controller:"SynthCtrl",controllerAs:"synth"}).when("/synth/:patchName",{templateUrl:"views/synth.html",controller:"SynthCtrl",controllerAs:"synth"}).when("/patches",{templateUrl:"views/patches.html",controller:"PatchesCtrl",controllerAs:"patches"}).otherwise({redirectTo:"/"})}]),angular.module("synthappApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("synthappApp").controller("SynthCtrl",["$scope","$localStorage","$rootScope","$routeParams",function(a,b,c,d){a.storage=b,a.displayText="";for(patch in a.storage)a.currentPatch==d.patchData;a.isHidden=!0,a.showHide=function(){a.isHidden=a.isHidden?!1:!0,a.isVisible=a.isVisible?!0:!1},a.testaudio=function(){var b=new(window.AudioContext||window.webkitAudioContext);c.oscillator=b.createOscillator(),a.gainNode=b.createGain(),a.maxVol=1,a.initialVol=0,a.initialFreq=261.6,a.maxFreq=4e3,a.frequencyArray={C:[{two:65.41,three:130.8,four:261.6,five:523.3,six:1047,seven:2093}]},a.gainNode.gain.value=a.initialVol,c.oscillator.frequency.value=a.initialFreq,c.oscillator.connect(a.gainNode),a.gainNode.connect(b.destination),c.oscillator.start()},a.savePatch=function(a){var d={patchName:a,oscillator:c.oscillator.type,frequency:c.oscillator.frequency.value};b.savedPatches||(b.savedPatches=[]),b.savedPatches.push(d)}}]),angular.module("synthappApp").controller("PatchesCtrl",["$scope","$localStorage",function(a,b){a.storage=b}]),angular.module("synthappApp").factory("current",function(){}),angular.module("synthappApp").service("synthesizer",function(){}),angular.module("synthappApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="jumbotron"> <h1>SynthApp</h1> <p class="lead"> Experiment with sounds. </p> <br> <p> <a class="btn-lrg btn btn-success text-uppercase" ng-href="#/" href="#/"> start </a> </p> </div> <div class="row marketing"> <h4>Play</h4> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. </p> <h4>Save</h4> <p> Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. </p> <h4>Share</h4> <p> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. </p> </div>'),a.put("views/patches.html",'<div id="page-wrapper" class="clearfix" ng-controller="PatchesCtrl"> <div ng-if="storage"> <div id="info" class="row"> <div class="col-xs-8 bg-info center-block"> <h1>Patches</h1> </div> </div> <div id="info" class="row"> <div class="col-xs-8 bg-warning center-block"> <ul class="saved-patches-list"> <li ng-repeat="name in storage.savedPatches"> <a ng-href="/#/synth/{{name.patchName}}" class="btn btn-lg btn-primary">{{name.patchName}}</a> </li> </ul> <!-- 	<ul>\n    			<li>\n    				<a ng-href="#/synth"> Starter </a>\n    			</li>\n    			<li>Locally Stored Patch</li>\n    		</ul> --> </div> </div> </div> </div>'),a.put("views/synth.html",'<!-- <p>This is the about view.</p>\n\n<div ng-app ng-init="firstnum=1;secondnum=2">\n  <input type="number" min="0" ng-model="firstnum">\n    <span class="glyphicon glyphicon-hourglass" aria-hidden="true"></span>\n  <input type="number" min="0" ng-model="secondnum"> \n  	=\n    <span class="glyphicon glyphicon-sunglasses" aria-hidden="true"></span>\n 	<a href="#">high fives <span class="badge">{{firstnum + secondnum}}</span></a>\n	<button class="btn btn-primary" type="button">\n	  happy dances <span class="badge">{{firstnum*secondnum}}</span>\n	</button>\n</div> --> <div id="page-wrapper" class="clearfix" ng-controller="testaudio"> <div id="info" class="row"> <div class="col-xs-12 bg-info"> <h1>Synth</h1> <p> Audio data. Interface coming soon! </p> </div> </div> <div id="patchData" class="row"> <div class="col-xs-3 bg-success"> <h2> Oscilator </h2> <div class="radio oscillator" name="oscilator"> <label><input type="radio" ng-click="oscillator.type = \'sine\'" name="optradio">Sine</label> </div> <div class="radio"> <label><input type="radio" ng-click="oscillator.type = \'triangle\'" name="optradio">Triangle</label> </div> <div class="radio"> <label><input type="radio" ng-click="oscillator.type = \'square\'" name="optradio">Square</label> </div> <div class="radio"> <label><input type="radio" ng-click="oscillator.type = \'sawtooth\'" name="optradio">Sawtooth</label> </div> </div> <div class="col-xs-3 bg-warning"> <h2> Octave </h2> <span class="octave" name="frequency" ng-model="oscillator.frequencyArray"> {{oscillator.frequency.value}} <button class="btn btn-lrg glyphicon glyphicon glyphicon-arrow-up"></button> <button class="btn btn-lrg glyphicon glyphicon glyphicon-arrow-down"></button> </span> </div> <div class="col-xs-3 bg-success"> <h2> Volume </h2> <span class="volume" name="volume" ng-model="gainNode.gain.value"> {{gainNode.gain.value}} </span> <button class="btn btn-lrg glyphicon glyphicon-volume-up" ng-click="gainNode.gain.value = gainNode.gain.value + .01 "></button> <button class="btn btn-lrg glyphicon glyphicon-volume-down" ng-click="gainNode.gain.value = gainNode.gain.value - .01 "></button> </div> <div class="col-xs-3 bg-warning"> <button class="btn btn-lrg pull-right glyphicon glyphicon glyphicon-menu-hamburger" ng-click="showHide()"></button> <h2> Patches </h2> <div ng-hide="isHidden" ng-controller="PatchesCtrl"> <span id="patches"> <p>Save as {{displayText}}</p> <input type="text" name="patchName" id="patch-name" ng-model="displayText"> <button class="btn btn-lrg" ng-hide="isHidden" ng-click="savePatch(displayText)">Save</button> <a class="btn btn-lrg" ng-hide="isHidden" ng-href="/#/patches">View Patches</a> </span> </div> </div> </div> </div> <div class="row synth-canvas"> <div class="col-xs-12 bg-info"> <h2> Canvas </h2> <button class="btn btn-lrg glyphicon glyphicon-play" ng-click="oscillator.connect(gainNode)" ng-model="displayButton"></button> <button class="btn btn-lrg glyphicon glyphicon-stop" ng-click="oscillator.disconnect(gainNode)" ng-model="displayButton"></button> <canvas id="canvas"></canvas> </div> </div>   <!-- <script src="scripts/synthpad.js"></script> -->')}]);