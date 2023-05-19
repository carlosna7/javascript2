// length

var arr = [1,2,3,4,5];

console.log(arr.length);

// push - adiciona no final

arr.push(6);
arr.push("sete");

console.log(arr);

// pop - remove do final

arr.pop();

console.log(arr);

// unshift - adciona no inicio

arr.unshift(0);

console.log(arr);

// shift - remove do inicio

arr.shift();

console.log(arr);

// acessar último elemento

console.log(arr[arr.length - 1]);

// isArray

console.log(Array.isArray(5));

console.log(Array.isArray(arr));