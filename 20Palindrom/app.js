// Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

let input = document.getElementById("input");
let para = document.getElementById("para");
let btn = document.getElementById("btn");
btn.addEventListener("click", check);
function check() {
  let val = input.value;
  let res = val.split("").reverse().join("");
  console.log(res);
  if (val == res) {
    para.innerText = "This word is palindrome";
  } else {
    para.innerText = "This word is not a palindrome";
  }
}
