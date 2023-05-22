var x = 0;

var Tempo = setTimeout (function() {

    console.log("O x é 0")

}, 1500);

x = 5;

if (x > 0) {
    clearTimeout(Tempo);
    console.log("X passou de 0")
}

// clearSetInterval

var myInterval = setInterval (function () {

    console.log("Imprimindo Interval")

}, 500)

setTimeout (function() {

    console.log("Não precisamos mais repetir")
    clearInterval(myInterval)

}, 3550)