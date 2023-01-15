// Create an array of 10 names. [ "Abhi", "Vishal","Aryan","John",.........upto 10 ]. Now create a button. On clicking the button, show one random name.

let names = [
  "Abhi",
  "Vishal",
  "Aryan",
  "John",
  "Sami",
  "Chhaku",
  "Praj",
  "Isha",
  "Riya",
  "Sumu",
];
let btn = document.getElementById("btn");
btn.addEventListener("click", myFunc);
let para = document.getElementById("para");

function myFunc() {
  const randomIndex = Math.floor(Math.random() * names.length);
  para.innerText = names[randomIndex];
}
