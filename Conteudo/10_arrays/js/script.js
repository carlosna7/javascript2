const arr = [5, "carlos", true, {teste: 1, teste: 2}]; // Objeto => {}

console.log(arr);

// ----------------------------------------------------

const arr2 = [2,3,4,5,6];

console.log(arr2);

// ----------------------------------------------------

const arr3 = [5, "carlos", true, ["teste: 1", "teste: 2"]]; // Objeto => {}

console.log(arr3[0]);
console.log(arr3[1]);
console.log(arr3[2]);
console.log(arr3[3]);

arr3[4] = 10;
arr3[0] = "Cinco";

// ----------------------------------------------------

const arrEsparso = [1,,,3]

arrEsparso[10] = 10

// ----------------------------------------------------

delete arrEsparso [0]

console.log(arrEsparso);