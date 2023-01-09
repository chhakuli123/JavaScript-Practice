/*create a fun predictAge web app ,for that create a input field in which user can type their name, on clicking of button "PredictAge", you have to call API and send the input name as query parameter to get the age.
       show the name and age on the screen

       url- https://api.agify.io/?name=
*/


let input = document.getElementById("input")
let btn = document.getElementById("btn")
let para = document.getElementById("para")

let url = "https://api.agify.io/?name="

btn.addEventListener("click", myAge)

function myAge() {
    let val = input.value;
    let appand = url + val
    // console.log(appand)
    fetch(appand)
        .then((response) => { return response.json() })
        .then((data) => {
            console.log(data)
            para.innerText = `my name is ${data.name} and age is ${data.age}`
        })
}