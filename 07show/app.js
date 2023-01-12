// Create a web app where I can input a text. Now reverse the text and on clicking the button, show the output on screen.
let input = document.getElementById("input")
let para = document.getElementById("para")
let btn = document.getElementById("btn")
btn.addEventListener("click", myFunc)
function myFunc() {
    let reverse = input.value;
    let result = reverse.split("").reverse().join("");
    para.innerText = result;

}