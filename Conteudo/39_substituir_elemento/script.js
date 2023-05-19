// criar um elemento

var el = document.createElement("h3");

el.classList = "testando-classe";

var texto = document.createTextNode("Este é o texto do H3");

el.appendChild(texto);

console.log(el);

// selecionar o elemento que quero trocar

var title = document.querySelector('#title');

console.log(title);

// selecionar o pai do elemento - maneira diferente

var pai = title.parentNode;

pai.replaceChild(el, title)