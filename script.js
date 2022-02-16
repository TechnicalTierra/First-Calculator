/*Project: working calculator
Step 1: when button is pressed it shows on calculator display: DONE
Step 2: when calculation buttons are pressed; the calculation is ran  ()

Step 3: */

// var calculationOutput = document.getElementById("calculation-output").value;

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
var oneBtn = document.getElementById("oneBtn");
var twoBtn = document.getElementById("twoBtn");
var threeBtn = document.getElementById("threeBtn");
var fourBtn = document.getElementById("fourBtn");
var fiveBtn = document.getElementById("fiveBtn");
var sixBtn = document.getElementById("sixBtn");
var sevenBtn = document.getElementById("sevenBtn");
var eightBtn = document.getElementById("eightBtn");
var nineBtn = document.getElementById("nineBtn");
var zeroBtn = document.getElementById("zeroBtn");
// calculation buttons
var decimalBtn = document.getElementById("calc-decimal");
var clearBtn;
var backspaceBtn = document.getElementById("");


// functions
function buttonModuloPressed(){
  // console.log ("button modulo/percentage (%) is pressed");
  document.getElementById("input-text-box").value = "%";
}
function buttonSquareRootPressed(){
  // console.log ("button square root (√) is pressed");
  document.getElementById("input-text-box").value = "√";
}
function buttonSquaredPressed(){
  // console.log ("button squared (x²) is pressed");
  document.getElementById("input-text-box").value = "x²";
}
function buttonFractionPressed(){
  // console.log ("button fraction (1/x) is pressed");
  document.getElementById("input-text-box").value = "1/x";
}
function buttonClearPressed(){
  // console.log ("button clear (CE) is pressed");
  document.getElementById("input-text-box").value = "";
}
function buttonBackspacePressed(){
  // console.log ("button backspace (←) is pressed");
  document.getElementById("input-text-box").value = "←";
}
function buttonDividePressed(){
  // console.log ("button divide (÷) is pressed");
  document.getElementById("input-text-box").value = "÷";
}
function buttonSevenPressed(){
  // console.log ("button number 7 is pressed");
  document.getElementById("input-text-box").value = 7;
}
function buttonEightPressed(){
  // console.log ("button number 8 is pressed");
  document.getElementById("input-text-box").value = 8;
}
function buttonNinePressed(){
  // console.log ("button number 9 is pressed");
  document.getElementById("input-text-box").value = 9;
}
function buttonMultiplyPressed(){
  // console.log ("button multiply (X) is pressed");
  document.getElementById("input-text-box").value = "x";
}
function buttonFourPressed(){
  // console.log ("button number 4 is pressed");
  document.getElementById("input-text-box").value = 4;
}
function buttonFivePressed(){
  // console.log ("button number 5 is pressed");
  document.getElementById("input-text-box").value = 5;
}
function buttonSixPressed(){
  // console.log ("button number 6 is pressed");
  document.getElementById("input-text-box").value = 6;
}
function buttonSubtractPressed(){
  // console.log ("button subtract is pressed");
  document.getElementById("input-text-box").value ="-";
}
function buttonOnePressed(){
  // console.log ("button number 1 is pressed");
  document.getElementById("input-text-box").value = 1;
}
function buttonTwoPressed(){
  // console.log ("button number 2 is pressed");
  document.getElementById("input-text-box").value = 2;
}
function buttonThreePressed(){
  // console.log ("button number 3 is pressed");
  document.getElementById("input-text-box").value = 3;
}
function buttonAddPressed(){
  // console.log ("button add is pressed");
  document.getElementById("input-text-box").value = "+";
}
function buttonPlusMinusPressed(){
  // console.log ("button plus/minus (±) is pressed");
  document.getElementById("input-text-box").value = "±";
}
function buttonZeroPressed(){
  // console.log ("button number 0 is pressed");
  document.getElementById("input-text-box").value = 0;
}
function buttonDecimalPressed(){
  // console.log ("button decimal (.) is pressed");
  document.getElementById("input-text-box").value = ".";
}
function buttonEqualPressed(){
  // console.log ("button equal (=) is pressed");
  document.getElementById("input-text-box").value = "=";
}


