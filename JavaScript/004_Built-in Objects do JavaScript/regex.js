const word = new RegExp(/a/); // /Expresão que estamos procurando/

console.log(word.test("Teste"));
console.log(word.test("Testando"));