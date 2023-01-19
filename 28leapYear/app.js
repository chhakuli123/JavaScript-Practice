// Write a JavaScript program to find the leap years in a given range of years.

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let para = document.getElementById("para");
let btn = document.getElementById("btn");
btn.addEventListener("click", find);
function find() {
  let start = input1.value;
  let end = input2.value;
  let yearRange = [];
  for (let i = start; i <= end; i++) {
    if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
      yearRange.push(i);
    }
  }
  para.innerText = `There are ${yearRange} in between ${start} year to ${end} year`;
}
