// Criando um objeto
const car = { };

console.log(car);
console.log(typeof car);

// Propriedades
// Criando um objeto com propriedades
const person = {
    name: "Leonardo",
    age: 22
};

// Adicionando propriedades ao objetos
person.job = "Desenvolvedor";

// Acessando propriedades
console.log(person.name);
console.log(person["job"]);

// Métodos
// Criando um objeto com um método
const student = {
    name: "Mônica",
    toIntroduce: function() {
        console.log("Oi, meu nome é Mônica!");
    }
};

// Acessando o método do objeto
student.toIntroduce();

// Adicionando um método ao objeto
student.sleepingInClass = function()    {
    console.log("Ronc! Ronc!");
};

student.sleepingInClass();

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
sum.displayResult();

// Ex.: 2
const newPerson = {
    name: "Maria",
    details: {
        eyesColor: "verde",
        hairColor: "castanho"
    }
};

console.log(newPerson.details.eyesColor);

// Deletando propriedades e métodos
// const person = {
//     name: "Leonardo",
//     age: 22,
//     job: "Desenvolvedor"
// };

person.speak = function()   {
    console.log("Oi!");
};

console.log(person);

delete person.age;
delete person.speak;

console.log(person);

let [a, ...b] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(a);
console.log(b);