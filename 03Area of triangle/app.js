
// let btn = document.getElementById("btn")
// btn.addEventListener("click", calculate())

function calculate() {
    let side1 = Number(document.getElementById("side1").value)
    let side2 = Number(document.getElementById("side2").value)
    let side3 = Number(document.getElementById("side3").value)
    let semi = (side1 + side2 + side3) / 2
    console.log(semi)
    const areaValue = Math.sqrt(
        semi * (semi - side1) * (semi - side2) * (semi - side3)

    );
    console.log(
        `The area of the triangle is ${areaValue}`
    );
    document.getElementById("para").innerText = `The area of the triangle is ${areaValue}`

}