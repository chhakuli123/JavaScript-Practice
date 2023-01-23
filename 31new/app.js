// Write a JavaScript program to calculate the volume of a sphere.

let radius = document.getElementById("radius");
let volume = document.getElementById("volume");
let btn = document.getElementById("btn");
btn.addEventListener("click", calculate);

function calculate() {
  let r = radius.value;
  let res = (4 / 3) * 3.14 * r * r * r;
  volume.value = res;
}
