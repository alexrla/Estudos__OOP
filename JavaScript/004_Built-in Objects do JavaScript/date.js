const myDate = new Date;

console.log(new Date());

console.log(new Date(2001, 04, 15));

console.log(new Date(1578900050000));

console.log(myDate.setMonth(2)); // Retorna um data em milisegundos (a data varia em relação ao mês passado, mas o dia e o ano, são os atuais)
console.log(new Date(myDate.setMonth(2)));

console.log(Date.parse("Apr 22, 2019")); // Transforma a data "normal", em uma data em milisegundos

console.log(Date.now()); // Retorna a data atual em milisegundos

console.log(new Date(Date.now()));