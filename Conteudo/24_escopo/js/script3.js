let nivelGlobal = "Nível Global"
let nivel1 = undefined, nivel2 = undefined, nivel3 = undefined

function funcaoNivel1() {
    let nivel1 = "Nível1"

    function funcaoNivel2() {
        let nivel2 = "Nível2"

        function funcaoNivel3() {
            let nivel3 = "Nível3"
        
            console.log(`\nFunção nível 3 resultado: \n${nivelGlobal} \n${nivel1} \n${nivel2} \n${nivel3} `)
        }
        funcaoNivel3()
    
        console.log(`\nFunção nível 2 resultado: \n${nivelGlobal} \n${nivel1} \n${nivel2} \n${nivel3 ? nivel3: "nivel3 inacessível"}`)
    }
    funcaoNivel2()

    console.log(`\nFunção nível 1 resultado: \n${nivelGlobal} \n${nivel1} \n${nivel2 ? nivel2: "nivel2 inacessível"} \n${nivel3 ? nivel3: "nivel3 inacessível"}`)
}
funcaoNivel1()