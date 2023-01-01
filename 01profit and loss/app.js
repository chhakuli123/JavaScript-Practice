
function calculate() {
    let cost = document.getElementById("cost").value;
    let sell = document.getElementById("sell").value;
    if (cost > sell) {
        let loss = cost - sell;
        document.getElementsByClassName("heading")[0].innerText = `you got loss of ${loss} Rs`;

    }
    if (cost < sell) {
        let profit = sell - cost;
        document.getElementById("heading").innerText = `you got profit of ${profit} Rs`;

    }
    if (cost == sell) {
        console.log("you got nothing");
        document.getElementById("heading").innerText = "you got nothing";

    }

}
