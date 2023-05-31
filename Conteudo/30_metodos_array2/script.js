// splice

var arr = [1,2,3,4,5,5];

arr.splice(2, 0 ,333);
arr.splice(3, 0 ,444);

console.log(arr);

arr.splice(4, 2);

console.log(arr);

//indexOf

console.log(arr.indexOf(5));

console.log(arr);

// join

var arr2 = ["O", "rato", "roeu", "a", "roupa"];

console.log(arr2.join(", "));

// reverse

console.log(arr2.reverse());

// 

const arrOrd = [2, 3, 1, 4, 5]

arrOrd.sort()

console.log(arrOrd )