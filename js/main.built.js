(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Main = (function() {
	return {
		initialize: function() {
			console.log('hi');
			this.doSomething();
		},
		doSomething: function() {
			console.log('ppl');
		}
	}

}());

module.exports = Main.initialize();
},{}]},{},[1])


/* title */
var message=new Array();message[0]="Russ Rizzo";message[1]="is a copywriter";message[2]="at Barton F. Graf";message[0]="in New York City.";var reps=2;var speed=100;var p=message.length;var T="";var C=0;var mC=0;var s=0;var sT=null;if(reps<1)reps=1;function doTheThing(){T=message[mC];A();}
function A(){s++;if(s>8){s=1;}
if(s==1){document.title=''+T+'';}
if(s==2){document.title=''+T+'';}
if(C<(8*reps)){sT=setTimeout("A()",speed);C++;}
else{C=0;s=0;mC++;if(mC>p-1)mC=0;sT=null;doTheThing();}}
doTheThing();