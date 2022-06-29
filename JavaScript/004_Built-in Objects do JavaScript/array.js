const myArray = new Array(1, 2, 3, 4, 5);
console.log(myArray); // [ 1, 2, 3, 4, 5 ]

myArray[5] = 6;
console.log(myArray); // [ 1, 2, 3, 4, 5, 6 ]


console.log(myArray instanceof Array); // true
console.log(Array instanceof Object); // true

console.log(myArray.length); // 6

myArray.push(7);
console.log(myArray); // [ 1, 2, 3, 4, 5, 6, 7 ]

myArray.pop();
console.log(myArray); // [ 1, 2, 3, 4, 5, 6 ]