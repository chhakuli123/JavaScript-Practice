// Write a JavaScript program to add items in an blank array and display the items.

let para = document.getElementById("para");

let x = 0;
let arr = [];

let addBtn = document.getElementById("add");
addBtn.addEventListener("click", add);
function add() {
  let input = document.getElementById("input");
  arr[x] = input.value;
  x++;
  console.log(arr);
}
let disBtn = document.getElementById("display");
disBtn.addEventListener("click", display);
function display() {
  let result;
  for (let y = 0; y < arr.length; y++) {
    result = `Element ${y} = ${arr[y]}\n`;
  }
  para.innerText += result;
}
