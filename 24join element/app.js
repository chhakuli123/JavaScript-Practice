// Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
//"Red+Green+White+Black"

let para = document.getElementById("para");
let para2 = document.getElementById("para2");
let para3 = document.getElementById("para3");
let btn = document.getElementById("btn");
let myColor = ["Red", "Green", "White", "Black"];

btn.addEventListener("click", check);
function check() {
  let res = myColor.toString("");
  let res1 = myColor.join();
  let res2 = myColor.join("+");
  para.innerText = res;
  para2.innerText = res1;
  para3.innerText = res2;
}
