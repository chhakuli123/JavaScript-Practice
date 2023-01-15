let btn = document.getElementById("btn");
btn.addEventListener("click", add);
let para = document.getElementById("para");

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function add() {
  let result = 0;

  for (let i = 0; i < num.length; i++) {
    result += num[i];
    console.log(result);
    para.innerText += `Sum of array is ${result}\n`;
  }
}
