// Here's an API - https://mystery-api.kushanksriraj.repl.co/get it can give two errors. Either 404, or 401. If the error is 404, show the user 'page not found' and if the error is 401, show the user 'you are not logged in

let url = "https://mystery-api.kushanksriraj.repl.co/get";
let para = document.getElementById("para");

let btn = document.getElementById("btn");
btn.addEventListener("click", check);

function check() {
  fetch(url).then((res) => {
    console.log(res);
    if (res.status === 404) {
      para.innerText = "page not found";
    } else if (res.status === 401) {
      para.innerText = "you are not logged in";
    }
  });
}
