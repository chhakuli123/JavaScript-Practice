// Here’s an API. https://randomuser.me/api/?results=10 Fetch the name and gender of user and show them on the web page. Now check weather the user is male or female. If the user is a female, show the name in pink colour.
let btn = document.getElementById("btn");
btn.addEventListener("click", myFunc);
let para = document.getElementById("para");
let para2 = document.getElementById("para2");
let url = "https://randomuser.me/api/?results=10";

function myFunc() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data.results);
      //   console.log(data.results.length);
      data.results.map((element) => {
        if (element.gender == "female") {
          para2.style.color = "pink";
          para2.innerText += ` The name of the user is ${element.name.first} and gender is ${element.gender}\n`;
        } else {
          para.innerText += ` The name of the user is ${element.name.first} and gender is ${element.gender}\n`;
        }
      });
    });
}
