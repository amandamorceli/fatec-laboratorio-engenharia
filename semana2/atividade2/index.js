function Relogio() {
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let seg = new Date().getSeconds();
    document.getElementById("relogio").innerHTML = `${hr}:${min}:${seg}`  ;
}

setInterval(Relogio, 1000);
Relogio();