var foot = document.querySelector("footer");
// var deg = document.querySelectorAll("#t1,#t2,#t3,#t4,#t5,#t6,#t7,#t8");
var cil = document.getElementById("cil");
var feh = document.getElementById("feh");
var currDeg = [
  document.querySelector(".tt1").innerHTML,
  document.querySelector(".tt2").innerHTML,
  document.querySelector(".tt3").innerHTML,
  document.querySelector(".tt4").innerHTML,
  document.querySelector(".tt5").innerHTML,
  document.querySelector(".tt6").innerHTML,
  document.querySelector(".tt7").innerHTML,
  document.querySelector(".tt8").innerHTML,
];
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
  if (value == "cil")
    for (var i = 1; i < currDeg.length; i++)
      document.querySelector(".tt" + i).innerHTML = changeToF(currDeg[i - 1]);
  else if (value == "feh")
    for (var j = 1; j < currDeg.length; j++)
      document.querySelector(".tt" + j).innerHTML = changeToC(currDeg[j - 1]);
}
