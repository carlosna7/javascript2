const foo = function asd() {
    console.log("foobar")
}

foo();

// --------------------------------------------------------------

function dizOla() {
    return "Ola, ";
}

function apresentacao(a, b) {
    console.log(a() + b);
}

apresentacao(dizOla, "Javascript")

// --------------------------------------------------------------

function printText() {
    return function() {
        console.log("text");
    }
}

const myFunc = printText();
myFunc();

printText()()