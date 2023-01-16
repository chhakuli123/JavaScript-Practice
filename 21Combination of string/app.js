// Write a JavaScript function that generates all combinations of a string.

let input = document.getElementById("input");
let para = document.getElementById("para");

let btn = document.getElementById("btn");
btn.addEventListener("click", check);
function check() {
  let val = input.value;
  let newVal = [];
  for (let i = 0; i < val.length; i++) {
    for (let j = i + 1; j < val.length + 1; j++) {
      newVal.push(val.slice(i, j));
    }
  }
  para.innerText = newVal;
}
