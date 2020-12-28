
let horas = 0;
let minutos = 0;
let segundos = 0;

let displayMinutos = 0;
let displaySegundos = 0;

let status = "stop";

let intervalo =  window.setInterval(loadWatch, 1000);

function loadWatch() {
    segundos++;


    if (segundos / 60 === 1) {
        segundos = 0;
        minutos++

        if (minutos / 60 === 1) {
            minutos = 0;
            horas++;

        }

    }


if( segundos < 10 ) {

displaySegundos = "0" + segundos.toString()


} else {

    displaySegundos = segundos

}


if( minutos < 10 ) {

    displayMinutos = "0" + minutos.toString()
 
} else {
    displayMinutos = minutos
}




    document.getElementById("displauclock").innerHTML = horas + " : " + minutos + " : " + segundos;

}


function StartAndStop() {

if( status === "stop") {
    window.setInterval(loadWatch, 1000);
    document.getElementById("buttonstart").innerHTML = "STOP";
    status === "started"

} else {
    window.clearInterval(intervalo)
    document.getElementById("buttonstart").innerHTML = "START";
    status === "stop"

}
 
}


function reset() {
    window.clearInterval(intervalo)
    horas = 0;
    minutos = 0;
    segundos = 0;
    document.getElementById("displauclock").innerHTML = horas + " : " + minutos + " : " + segundos;
    document.getElementById("buttonstart").innerHTML = "START";

    
}

