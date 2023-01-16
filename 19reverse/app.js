// Write a JavaScript program to reverse the order of the characters in the string

let input = document.getElementById("input");
let para = document.getElementById("para");
let btn = document.getElementById("btn");
btn.addEventListener("click", reverse);
function reverse() {
  let val = input.value;
  let res = val.split("").reverse().join("");
  para.innerText = res;
}
