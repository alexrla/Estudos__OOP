let myString = new String("teste");

console.log(myString.length);

for(let i = 0; i < myString.length; i++)    {
    console.log(myString[i]);
}

myString = myString.toUpperCase();
console.log(myString);

myString = myString.toLowerCase();
console.log(myString);

console.log(myString.charAt(4)); // Retorna o caractere no índice especificado
console.log(myString.indexOf("s")); // Retorna o índice da primeira ocorrência do caractere (se o caractere não existir, retorna -1)