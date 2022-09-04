var foot = document.querySelector("footer");
var cil = document.getElementById("cil");
var feh = document.getElementById("feh");
let currDeg = document.querySelectorAll(".tt");
console.log(currDeg);
function hideFoot() {
  foot.remove();
}
function alerting() {
  alert("Loading Weather report");
}
function changeToC(input) {
  return (input - 32) * 0.5556;
}
// console.log(changeToC(60));
function changeToF(input) {
  return input * (9 / 5) + 32;
}
// console.log(changeToC(100));
function chDeg(value) {
  if (value == "cil")
    for (var i = 1; i < currDeg.length; i++)
      currDeg[i].innerText = changeToF(parseInt(currDeg[i - 1]).innerText);
  else if (value == "feh")
    for (var j = 1; j < currDeg.length; j++)
      currDeg[j].innerText = changeToC(parseInt(currDeg[j - 1]).innerText);
}
