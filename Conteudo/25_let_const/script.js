let x = 5;

const y = 10; // não pode ser alterado

// y = 10;

x = 12;

console.log(x)

console.log("const " + y)

if (true) {

    let x = 20;

    console.log(x)

    const y = 50;

    console.log("const if " + y)

}

if (20>10) {

    const y = 100;

    console.log("const if 3 " + y)

}

for (let x = 1; x < 5; x++) {
    console.log(x)
}