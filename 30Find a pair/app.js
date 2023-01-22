//Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number. Go to the editor

// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3

let numbers = [10, 20, 10, 40, 50, 60, 70];
let target = 50;

let btn = document.getElementById("btn");
btn.addEventListener("click", check);
function check() {
  for (i = 0; i < numbers.length; i++) {
    var first = numbers[i];
    for (j = i + 1; j < numbers.length; j++) {
      var second = numbers[j];

      if (first + second == target) {
        alert("First: " + first + " Second " + second + " SUM " + target);
        console.log("First: " + first + " Second " + second);
      }
    }
  }
}

// function arraypair(array,sum){
//     for (i = 0;i < array.length;i++) {
//         var first = array[i];
//         for (j = i + 1;j < array.length;j++) {
//             var second = array[j];

//             if ((first + second) == sum) {
//         alert('First: ' + first + ' Second ' + second + ' SUM ' + sum);
//         console.log('First: ' + first + ' Second ' + second);
//             }
//         }

//     }
// }

// var a = [2, 4, 3, 5, 6, -2, 4, 7, 8, 9];

// arraypair(a,7);
