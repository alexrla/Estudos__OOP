const myArray = new Array(1, 2, 3, 4, 5);
console.log(myArray);

myArray[5] = 6;
console.log(myArray);


console.log(myArray instanceof Array);
console.log(Array instanceof Object);

console.log(myArray.length);

myArray.push(7);
console.log(myArray);

myArray.pop();
console.log(myArray);