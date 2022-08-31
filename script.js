var foot = document.querySelector("footer");
var deg = document.querySelectorAll("#t1,#t2,#t3,#t4,#t5,#t6,#t7,#t8");
var cil = document.getElementById("cil");
var feh = document.getElementById("feh");
var currval = [
  document.querySelector(".tt1").innerHTML,
  document.querySelector(".tt2").innerHTML,
  document.querySelector(".tt3").innerHTML,
  document.querySelector(".tt4").innerHTML,
  document.querySelector(".tt5").innerHTML,
  document.querySelector(".tt6").innerHTML,
  document.querySelector(".tt7").innerHTML,
  document.querySelector(".tt8").innerHTML,
];
var temparr = [];
console.log(currval);

function hideFoot() {
  foot.remove();
}
function changeToC(input) {
  var c = (input - 32) * 0.5556;
  return c;
}
function changeToF(input) {
  var f = input * (9 / 5) + 32;
  return f;
}
function chDeg(value) {
  if (value == "cil"){
  for (var j=0;j<currval.length-1;i++){
  if (arr[i] == 0) {
    temparr[i] = changeToC(currval[j]);
  }
}
