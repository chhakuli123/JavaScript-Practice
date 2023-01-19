// Write a JavaScript program to compute the union of two arrays. Go to the editor
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];
let para = document.getElementById("para");
let btn = document.getElementById("btn");
btn.addEventListener("click", union);
function union() {
  let res = [...new Set([...arr1, ...arr2])];
  console.log(res);
  para.innerText = res;
}
// Use the spread operator for concatenating the array.
// Use Set for creating a distinct set of elements.
// Again use the spread operator to convert the Set into an array.
//new keword creates the counstructor and gives object in return so we want array so to convert object into array we used spread operator
