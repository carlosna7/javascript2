// criar elemento

var el = document.createElement("div");

el.classList = "div-criada";

console.log(el);

var container = document.querySelector("#container");

container.appendChild(el);

// inserBefore - inserir Antes

var el2 = document.createElement("div");

el2.classList = "div-before";

var el3 = document.querySelector("#container .div-criada");

container.insertBefore(el2, el3);



////var paragrafo = document.createElement("p")

//var texto = document.createTextNode("Texo do paragrafo")

///paragrafo.appendChild(texto)

//el.appendChild(paragrafo)
