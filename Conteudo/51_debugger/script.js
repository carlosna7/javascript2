const nome = "Carlos";
const sobrenome = "Eduardo";

const nomeCompleto = (primeiroNome, segundoNome) => {
    const retorno = primeiroNome + " " + segundoNome
    return retorno;
}

const retornoFuncaoTeste = nomeCompleto(nome, sobrenome);

console.log(retornoFuncaoTeste);

if(nome.length > 1) {
    console.log(retornoFuncaoTeste);
} else {
    console.log("Não deu a quantidade mínima de caracteres")
}