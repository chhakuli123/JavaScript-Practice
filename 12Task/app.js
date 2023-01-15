// Have a text, and three buttons left, right and center. On clicking right button the text should move to right. Similarly for left and center.
let text = document.getElementById("text");

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", left);
function left() {
  text.style.textAlign = "left";
  console.log("hi");
}

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", center);
function center() {
  text.style.textAlign = "center";
  console.log("hi");
}

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", right);
function right() {
  text.style.textAlign = "right";
  console.log("hi");
}
