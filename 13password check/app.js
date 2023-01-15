// Create a password checker web application having 2 input sections that takes the password.If the value in both sections are equal then show the message Success on the screen and if not equal then show Passwords Mismatched on the click of a button

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let para = document.getElementById("para");
let btn = document.getElementById("btn");
btn.addEventListener("click", check);

function check() {
  let val1 = input1.value;
  let val2 = input2.value;

  if (val1 == val2) {
    para.innerText = "Success";
  } else {
    para.innerText = "Mismatched";
  }
}
