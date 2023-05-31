// exemplo escopo local

// codigo aqui NÃO pode usar nomeCarro
console.log(nomeCarro)

function carros() {
    var nomeCarro = "ferrari";

    // codigo aqui pode usar nomeCarro
    console.log(nomeCarro)
}

carros()

// -----------------------------------------------

// exemplo escopo global, variavel fora da função

var nomeCarro = "Supra"

// codigo aqui pode usar nomeCarro
console.log(nomeCarro)

function carros2() {

    // codigo aqui pode usar nomeCarro
    console.log(nomeCarro)
}

carros2()