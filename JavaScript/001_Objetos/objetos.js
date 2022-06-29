// Criando um objeto
const car = { };

console.log(car); // {}
console.log(typeof car); // object

// Propriedades
// Criando um objeto com propriedades
const person = {
    name: "Leonardo",
    age: 22
};

// Adicionando propriedades ao objetos
person.job = "Desenvolvedor";

// Acessando propriedades
console.log(person.name); // Leonardo
console.log(person["job"]); // Desenvolvedor

// Métodos
// Criando um objeto com um método
const student = {
    name: "Mônica",
    toIntroduce: function() {
        console.log("Oi, meu nome é Mônica!");
    }
};

// Acessando o método do objeto
student.toIntroduce(); // Oi, meu nome é Mônica!

// Adicionando um método ao objeto
student.sleepingInClass = function()    {
    console.log("Ronc! Ronc!");
};

student.sleepingInClass(); // Ronc! Ronc!

// Mais exemplos
// Ex.: 1
const sum = {
    value: 0,

    performSum: function(operatinOne, operatinTwo) {
        this.value = operatinOne + operatinTwo;
    },
    displayResult: function() {
        console.log(this.value);
    }
};

sum.performSum(10, 20) 
sum.displayResult(); // 30

// Ex.: 2
const newPerson = {
    name: "Maria",
    details: {
        eyesColor: "verde",
        hairColor: "castanho"
    }
};

console.log(newPerson.details.eyesColor); // verd

// Deletando propriedades e métodos
// const person = {
//     name: "Leonardo",
//     age: 22,
//     job: "Desenvolvedor"
// };

person.speak = function()   {
    console.log("Oi!");
};

console.log(person); // { name: 'Leonardo', age: 22, job: 'Desenvolvedor', speak: [Function (anonymous)] }

delete person.age;
delete person.speak;

console.log(person); // { name: 'Leonardo', job: 'Desenvolvedor' }

// Destructuring e rest operator
let [a, ...b] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(a); // 1
console.log(b); // [2, 3, 4, 5, 6, 7, 8, 9]