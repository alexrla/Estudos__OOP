let myNumber = new Number(4);

console.log(myNumber);
console.log(myNumber.valueOf());

let myNewNumber = new Number(12.333);

console.log(myNewNumber);
console.log(myNewNumber.valueOf());

console.log(Number.parseInt(myNewNumber));
console.log(parseInt(myNewNumber));

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

console.log(myNewNumber.toFixed(1));
console.log(myNewNumber.toPrecision(4)); // Retorna uma string que representa o valor do objeto Number com uma precisão específica (que corresponde ao número de algarismos significativos)
console.log(myNumber.toExponential()); // Retorna um string, representando o objeto Number, por meio de notação exponencial