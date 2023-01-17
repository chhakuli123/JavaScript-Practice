// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

let para = document.getElementById("para");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
btn.addEventListener("click", insert);
function insert() {
  let val = input.value;
  //   console.log(val);
  const result = [val[0]];
  console.log(result);
  //   console.log(val.length);
  for (let i = 1; i < val.length; i++) {
    console.log(val[i]);
    if (val[i - 1] % 2 === 0 && val[i] % 2 === 0) {
      result.push("-", val[i]);
    } else {
      result.push(val[i]);
    }
  }
  para.innerText = result.join("");
}
