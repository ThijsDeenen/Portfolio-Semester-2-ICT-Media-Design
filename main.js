const wrap = document.getElementById("wrap");
let left = document.getElementById('sideLeft');
let right = document.getElementById('sideRight');

window.onload = init;
function init(){
  setInterval(checkHeight, 100);
}

function checkHeight(){
  left.style.height =  wrap.clientHeight + 20 + "px";
  right.style.height =  wrap.clientHeight + 20 + "px";
}
//Toggle Sprints
function toggleText(whichText){
  let subject = document.getElementsByClassName("subject");
  subject[1].style.display = 'none';
  subject[2].style.display = 'none';
  subject[3].style.display = 'none';
  subject[4].style.display = 'none';
  document.getElementById(whichText).style.display = "block";
}
//1
let slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} 
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
  }
//2
let slideIndex2 = 1;
showDivs2(slideIndex2);
function plusDivs2(n){
    showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("slide2");
    if (n > x.length) {slideIndex2 = 1} 
    if (n < 1) {slideIndex2 = x.length} 
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    x[slideIndex2-1].style.display = "block"; 
}
//3
let slideIndex3 = 1;
showDivs3(slideIndex3);
function plusDivs3(n){
    showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
    var i;
    var x = document.getElementsByClassName("slide3");
    if (n > x.length) {slideIndex3 = 1} 
    if (n < 1) {slideIndex3 = x.length} 
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    x[slideIndex3-1].style.display = "block"; 
}
//4
let slideIndex4 = 1;
showDivs4(slideIndex4);
function plusDivs4(n){
    showDivs4(slideIndex4 += n);
}

function showDivs4(n) {
    var i;
    var x = document.getElementsByClassName("slide4");
    if (n > x.length) {slideIndex4 = 1} 
    if (n < 1) {slideIndex4 = x.length} 
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    x[slideIndex4-1].style.display = "block"; 
}
//5
let slideIndex5 = 1;
showDivs5(slideIndex5);
function plusDivs5(n){
    showDivs5(slideIndex5 += n);
}

function showDivs5(n) {
    var i;
    var x = document.getElementsByClassName("slide5");
    if (n > x.length) {slideIndex5 = 1} 
    if (n < 1) {slideIndex5 = x.length} 
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    x[slideIndex5-1].style.display = "block"; 
}
//6
let slideIndex6 = 1;
showDivs6(slideIndex6);
function plusDivs6(n){
    showDivs6(slideIndex6 += n);
}

function showDivs6(n) {
    var i;
    var x = document.getElementsByClassName("slide6");
    if (n > x.length) {slideIndex6 = 1} 
    if (n < 1) {slideIndex6 = x.length} 
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    x[slideIndex6-1].style.display = "block"; 
}
//7
let slideIndex7 = 1;
showDivs7(slideIndex7);
function plusDivs7(n){
    showDivs7(slideIndex7 += n);
}

function showDivs7(n) {
    var i;
    var x = document.getElementsByClassName("slide7");
    if (n > x.length) {slideIndex7 = 1} 
    if (n < 1) {slideIndex7 = x.length} 
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    x[slideIndex7-1].style.display = "block"; 
}
//8
let slideIndex8 = 1;
showDivs8(slideIndex8);
function plusDivs8(n){
    showDivs8(slideIndex8 += n);
}

function showDivs8(n) {
    var i;
    var x = document.getElementsByClassName("slide8");
    if (n > x.length) {slideIndex8 = 1} 
    if (n < 1) {slideIndex8 = x.length} 
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    x[slideIndex8-1].style.display = "block"; 
}
//9
let slideIndex9 = 1;
showDivs9(slideIndex9);
function plusDivs9(n){
    showDivs9(slideIndex9 += n);
}

function showDivs9(n) {
    var i;
    var x = document.getElementsByClassName("slide9");
    if (n > x.length) {slideIndex9 = 1} 
    if (n < 1) {slideIndex9 = x.length} 
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    x[slideIndex9-1].style.display = "block"; 
}