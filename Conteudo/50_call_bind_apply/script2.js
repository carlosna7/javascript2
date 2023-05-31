const obj1 = {
    exemplo: "exemplo",
    mostraThis: function() {
        console.log(this)
    }
} 

const obj2 = {
    exemplo2: "exemplo2",
    exemplo22: "exemplo22",
}

const obj3 = {exemplo3: "exemplo3"}

obj1.mostraThis()

obj1.mostraThis.call(obj2)

obj1.mostraThis.call(obj2.exemplo22)
 
obj1.mostraThis.apply(obj3)