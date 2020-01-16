/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const Time = require('Time');
const Materials = require('Materials');
const TouchGestures = require('TouchGestures');

const plane = Scene.root.find('resposta');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

var interval;
var materials = [];
var sorting = false;

getMaterials();

TouchGestures.onTap().subscribe(function (gesture) {
	if(sorting) return;
	start();
});


function start(){
	interval = Time.setInterval(sortResult, 50);
	Time.setTimeout(finishSort, 2000);
	sorting = true;
}


function getMaterials(){
	for(var i = 1; i < 10; i++){
		materials.push(Materials.get('r0' + i));
	}
}

function sortResult(){
	var random = Math.floor((Math.random() * materials.length) + 0);
	plane.material = materials[random];
}

function finishSort(){
	Time.clearInterval(interval);
	sorting = false;
}

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const directionalLight = Scene.root.find('directionalLight0');

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');
