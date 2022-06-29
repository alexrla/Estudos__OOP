let myBoolean = new Boolean(true);

console.log(myBoolean); // [Boolean: true]
console.log(myBoolean.valueOf()); // true

console.log(myBoolean instanceof Boolean); // true
console.log(true instanceof Boolean); // false
console.log(false instanceof Boolean); // false

// true e false são valores primitivos do tipo primitivo boolean
// myBoolean tem o valor true do objeto Boolean