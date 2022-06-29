let myNumber = new Number(4);

console.log(myNumber); // [Number: 4]
console.log(myNumber.valueOf()); // 4

let myNewNumber = new Number(12.333);

console.log(myNewNumber);  // [Number: 12.333]
console.log(myNewNumber.valueOf()); // 12.333

console.log(Number.parseInt(myNewNumber)); // 12
console.log(parseInt(myNewNumber)); // 12

console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log(myNewNumber.toFixed(1)); // 12.3
console.log(myNewNumber.toPrecision(4)); // 12.33 - Retorna uma string que representa o valor do objeto Number com uma precisão específica (que corresponde ao número de algarismos significativos)
console.log(myNumber.toExponential()); // 4e+0 - Retorna uma string, representando o objeto Number, por meio de notação exponencial