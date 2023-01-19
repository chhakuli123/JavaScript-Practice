// Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

let input = document.getElementById("input");
let para = document.getElementById("para");
let btn = document.getElementById("btn");
btn.addEventListener("click", swap);

function swap() {
  let val = input.value;

  let res = val
    .split("")
    .map(function (element) {
      console.log(element);
      return element === element.toUpperCase()
        ? element.toLowerCase()
        : element.toUpperCase();
    })
    .join("");

  para.innerText = res;
}
