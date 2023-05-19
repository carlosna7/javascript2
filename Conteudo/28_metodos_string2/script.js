// toLowerCase e toUpperCase

var frase = "esta é a frase que vamos manipular";

var fraseCaixaAlta = frase.toUpperCase();

console.log(frase.toLowerCase());

console.log(fraseCaixaAlta.toUpperCase());

// trim

var nome = "         carlos     ";

var nomeTrim = "carlos";

console.log(nome);
console.log(nomeTrim);

// split 

console.log(frase.split(" "));

var tags = "PHP, Javascript, HTML, CSS";

console.log(tags.split(", "));

// lastIndexOf

var fraseDois = "Eu quero a última palavra teste desta frase de teste";

console.log(fraseDois.indexOf("teste"));
console.log(fraseDois.lastIndexOf("teste"));