// Write a JavaScript program to find the most frequent item of an array. Go to the editor
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

let arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let para = document.getElementById("para");
let btn = document.getElementById("btn");
btn.addEventListener("click", check);
function check() {
  let val = 0;
  let mf = 1;
  let item;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j < arr1.length; j++) {
      if (arr1[i] == arr1[j]) {
        val++;
      }
      if (mf < val) {
        mf = val;
        item = arr1[i];
      }
    }
    val = 0;
  }
  para.innerText = ` count ${mf} ${item} times`;
}
