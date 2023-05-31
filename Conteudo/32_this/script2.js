const obj = {
    prop1: 100,
    prop2: 200,
    f: function() {
        return this.prop1 // precisa do this, sem ele da erro
    }
}

console.log(obj.f())

// ------------------------------------------------------------

// declarações incorretas

// const arrowFunctionThis = () => { console.log(this)}

// const arrowFunctionThis = {
//     prop: 300,
//     arrowF: () => {console.log(this)}
// }

// ------------------------------------------------------------

const objeto = {
    exemplo1: "exemplo1",
    mostraThis: function() {
        console.log((() => this)())
    }
}

objeto.mostraThis()