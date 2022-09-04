var foot = document.querySelector("footer");
var cil = document.getElementById("cil");
var feh = document.getElementById("feh");
let currDeg = document.querySelectorAll(".tt span");
function hideFoot() {
  foot.remove();
}
function alerting() {
  alert("Loading Weather report");
}
function changeToC(input) {
  return Math.floor((input - 32) * 0.5556);
}
// console.log(changeToC(60));
function changeToF(input) {
  return Math.floor(input * (9 / 5) + 32);
}
// console.log(changeToF(100));
function chDeg(value) {
  if (value == "cil")
    for (var i = 0; i < currDeg.length; i++) {
      currDeg[i].innerText = changeToC(currDeg[i].innerText);
    }
  else if (value == "feh")
    for (var j = 0; j < currDeg.length; j++)
      currDeg[j].innerText = changeToF(currDeg[j].innerText);
}
