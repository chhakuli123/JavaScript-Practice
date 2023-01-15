// Take an input from the user in text format . Have 3 buttons with the names of "Log" ,"Warn" and "Error". If user clicks on "Log" button then the text entered by user will be shown in black color. Similarly if the user clicks on "Warn " and "Error " buttons then the text entered by user will be shown on the screen in the yellow and red colors respectively.

let input = document.getElementById("input");
let para = document.getElementById("para");

input.onkeyup = function () {
  para.innerHTML = input.value;
};

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", log);
function log() {
  let val = input.value;
  para.style.color = "blue";
  para.innerText = val;
}
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", warn);
function warn() {
  let val2 = input.value;
  para.style.color = "green";
  para.innerText = val2;
}
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", error);
function error() {
  let val3 = input.value;
  para.style.color = "red";
  para.innerText = val3;
}
