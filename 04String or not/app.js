let input = document.getElementById("value");
let btn = document.getElementById("btn");
btn.addEventListener("click", check);

function check() {
  let val = input.value;
  if (isNaN(val)) {
    document.getElementById("heading").innerText = "Entered value is String";
  } else {
    document.getElementById("heading").innerText =
      "Entered value is not a String";
  }
}
