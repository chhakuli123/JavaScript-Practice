// Write a JavaScript program to calculate multiplication and division of two numbers (input from user)

let para = document.getElementById("para");

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", multiply);
function multiply() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let multiplication = num1 * num2;
  para.innerText = multiplication;
}
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", division);
function division() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let divide = num1 / num2;
  para.innerText = divide;
}
