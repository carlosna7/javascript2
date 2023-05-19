var lista = ['laranja', 'maçã', 'uva', 'pera', 'jaca'];
var listaUl = document.createElement('ul');
var body = document.getElementsByTagName('body');

// console.log(body[0]);

body[0].appendChild(listaUl);

var listaNoBody = document.getElementsByTagName('ul');

// console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++) {
    
    var liFor = document.createElement ('li');
    var textoLi = document.createTextNode(lista[i]);

    liFor.appendChild(textoLi);
    
    listaNoBody[0].appendChild(liFor);

    // console.log(liFor);

}
////////////////////////////////////////////////////////////////////////////

var navegar = ['ana', 'bruno', 'carlos', 'denis', 'eliana'];
var navegarNav = document.createElement('nav');
var body = document.getElementsByTagName('body');

// console.log(body[0]);

body[0].appendChild(navegarNav);

var navegarNoBody = document.getElementsByTagName('nav');

// console.log(listaNoBody[0]);

for(var i = 0; i < navegar.length; i++) {
    
    var pFor = document.createElement ('p');
    var textoP = document.createTextNode(navegar[i]);

    pFor.appendChild(textoP);
    
    navegarNoBody[0].appendChild(pFor);

    // console.log(liFor);

}