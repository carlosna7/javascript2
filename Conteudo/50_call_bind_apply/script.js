function thisBindExemplo() {
    console.log(this)
}

const obj1 = {exemplo: "exemplo"}

thisBindExemplo = thisBindExemplo.bind(obj1)

thisBindExemplo()

// -------------------------------------

const obj2 = {
    exemplo2: "exemplo",
    thisBindExemplo2: function () {
        console.log(this)
    }
}

obj2.thisBindExemplo2()