const myDate = new Date;

console.log(new Date()); // 2022-06-28T23:02:27.666Z

console.log(new Date(2001, 04, 15)); // 2001-05-15T03:00:00.000Z

console.log(new Date(1578900050000)); // 2020-01-13T07:20:50.000Z

console.log(myDate.setMonth(2)); // 1648508547666 - Retorna a data em milisegundos (a data varia em relação ao mês passado, mas o dia e o ano, são os atuais)
console.log(new Date(myDate.setMonth(2))); // 2022-03-28T23:02:27.666Z

console.log(Date.parse("Apr 22, 2019")); // 1555902000000 - Transforma a data "normal", em uma data em milisegundos

console.log(Date.now()); // 1656457347707 - Retorna a data atual em milisegundos

console.log(new Date(Date.now())); // 2022-06-28T23:02:27.707Z