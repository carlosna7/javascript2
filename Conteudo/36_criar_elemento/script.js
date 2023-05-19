var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("Este é conteudo do paragrafo");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo)

var body = document.querySelector("body");

console.log(body);

body.appendChild(novoParagrafo);

// inserir em um container

var container = document.getElementById("container");

var elem = document.createElement("nav")

elem.appendChild(document.createTextNode("testo do nav"));

console.log(elem);

container.appendChild(elem)