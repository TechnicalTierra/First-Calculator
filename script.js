// alert("Calculator js file is attached.");

var calculationOutput = document.getElementById("calculation-output").value;

var calculationDisplayOutput = document.getElementById("display-output");
// calculationDisplayOutput = document.getElementById("display-output").innerHTML = "js script test";

//let runningTotal = 0;

let buffer = "0"; // what's displayed at any given time 
// keep 'source of truth' (query) OUT of DOM 


// stsateful interface = keeping track of previous actions 
//let previousOperator;

//const screen = document.querySelector('.screen');

// js = breaking things into smaller and smaller problems until they're easiter to solve


// 1st step - what happens when a button is clicked 
//function buttonClick(value) {}



// calculator number buttons
var oneBtn = document.getElementById("calc-one");
var twoBtn = document.getElementById("calc-two");
var threeBtn = document.getElementById("calc-three");
var fourBtn = document.getElementById("calc-four");
var fiveBtn = document.getElementById("calc-five");
var sixBtn = document.getElementById("calc-six");
var sevenBtn = document.getElementById("calc-seven");
var eightBtn = document.getElementById("calc-eight");
var nineBtn = document.getElementById("calc-nine");
var zeroBtn = document.getElementById("calc-zero");
// calculation buttons
var decimalBtn = document.getElementById("calc-decimal");
var clearBtn;
var backspaceBtn = document.getElementById("");
