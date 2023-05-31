// exemplo função construtora

 function Ventilador(velMax) {
    this.velocidadeMaxima = velMax;
    this.ligado = false;
}
const ventilador1 = new Ventilador(10); // adicionar valor a velMax

console.log(ventilador1.velocidadeMaxima);

// ----------------------------------------------

function Ventilador(velMax) {
    this.velocidadeMaxima = velMax;
    this.ligado = false;
}

ventilador1.cor = "branco"

console.log(ventilador1.cor)

ventilador1.ligaDesliga = function() {
    if(this.ligado)
        this.ligado = false
    else 
        this.ligado = true
}

ventilador1.ligaDesliga()
console.log(ventilador1.ligado)
ventilador1.ligaDesliga()
console.log(ventilador1.ligado)
ventilador1.ligaDesliga()
console.log(ventilador1.ligado)
ventilador1.ligaDesliga()
console.log(ventilador1.ligado)
