let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");
let btn = document.getElementById("btn");
btn.addEventListener("click", check);
let url = "https://api.funtranslations.com/translate/minion.json";

function check() {
    let input = val1.value;
    let append = url + "?text=" + input;
    fetch(append)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.contents.translated)

            let a = data.contents.translated;
            val2.value = a;
            // console.log(val2.textContent)

        });
}
