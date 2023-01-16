// Create a web app, which On the Click of a button fetches data from the provided API https://mock-practice.prakhar10v.repl.co/items and from the data, displays the item with the highest price on the screen, below the button.

let url = "https://mock-practice.prakhar10v.repl.co/items";
let para = document.getElementById("para");
let btn = document.getElementById("btn");
btn.addEventListener("click", check);

function check() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let arr = [];
      for (let i = 0; i < data.length; i++) {
        arr.push(data[i].price);
      }
      let result = Math.max(...arr);
      para.innerText += `Highest value is  ${result}\n`;
    });
}
