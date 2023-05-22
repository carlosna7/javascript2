// function exibir(resultado) {

//     console.log("A  operação resultou em " + resultado);

// }

// function soma (a, b, cb) {

//     var op = a + b;

//     cb(op);
// }

// function multiplicacao (a, b, cb) {

//     var op = a * b;

//     cb(op);
// }

// soma (2, 2, exibir);

// multiplicacao (2, 4, exibir);

function exibir(op, resultado) {
    console.log("A operação " + op + " resultou em " + resultado);
}

function realizarOperacao(a, b, op, callback) {
    var resultado;

    if (op === "soma") {
        resultado = a + b;
    } else if (op === "multiplicacao") {
        resultado = a * b;
    } else if (op === "subtracao") {
        resultado = a - b;
    }

    callback(op, resultado);
}

realizarOperacao(5, 3, "soma", exibir);
realizarOperacao(5, 3, "multiplicacao", exibir);
realizarOperacao(5, 3, "subtracao", exibir);