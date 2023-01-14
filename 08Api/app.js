// Here’s an API. https://randomuser.me/api/?results=10 Fetch the name and age of user and show them on the web page. Now check weather the user is eligible for vaccination ( must be above 45 ). If yes, show the name in green colour.

let input = document.getElementById("input");
let para = document.getElementById("para");
let para2 = document.getElementById("para2");
let url = "https://randomuser.me/api/?results=10";
let btn = document.getElementById("btn");
btn.addEventListener("click", myFunc);

function myFunc() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.results.map((firstname) => {
        if (firstname.dob.age > 45) {
          para2.style.color = "red";
          para2.innerText = ` The name of user is ${firstname.name.first} and age is ${firstname.dob.age}\n`;
        } else {
          para.style.color = "black";
          para.innerText = ` The name of user is ${firstname.name.first} and age is ${firstname.dob.age}\n`;
        }
      });
    });
}
