// mport three fonts from Google fonts. Then create a p tag with some text inside it. Now, create three buttons with these font names. On the clicking button, the text font should change accordingly

let heading = document.getElementById("heading");

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", change1);
function change1() {
  heading.style.fontFamily = "Anton";
}

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", change2);
function change2() {
  heading.style.fontFamily = "Roboto Slab";
}

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", change3);
function change3() {
  heading.style.fontFamily = "Oswald";
}
