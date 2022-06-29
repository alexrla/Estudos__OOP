let myString = new String("teste");

console.log(myString.length); // 5

for(let i = 0; i < myString.length; i++)    {
    console.log(myString[i]);
}

myString = myString.toUpperCase();
console.log(myString); // TESTE

myString = myString.toLowerCase();
console.log(myString); // teste

console.log(myString.charAt(4)); // e - Retorna o caractere no índice especificado
console.log(myString.indexOf("s")); // 2 - Retorna o índice da primeira ocorrência do caractere (se o caractere não existir, retorna -1)