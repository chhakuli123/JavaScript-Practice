//  Write a JavaScript function to sort the following array of objects by title value. Go to the editor
// Sample object :

let library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

let para = document.getElementById("para");

let btn = document.getElementById("btn");
btn.addEventListener("click", myFunc);

function myFunc() {
  library.map((item) => {
    para.innerText += `Title of library ${item.title}\n `;
  });
}
