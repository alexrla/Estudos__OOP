function test() {
    console.log("Testando...");
}

test(); // Testando...

console.log(test instanceof Function); // true
console.log(test.prototype); // {}
console.log(typeof test.prototype); // object

test.prototype.propertyOne = "1";

console.log(test.prototype); // { propertyOne: '1' }
console.log(test.prototype.propertyOne); // 1

// Adicionando propriedades e métodos com o prototype
function Person(name, age, nickname, skills)   {
    this.name = name;
    this.age = age;
    this.nickname = nickname;
    this.skills = skills;
}

Person.prototype.toIntroduce = function()   {
    console.log(`Oi, eu sou ${this.name}!`);
}

// Não exibe o método criado a partir do prototype (ele apenas herda, para poder usar)
const goku = new Person("Goku", 44, "Kakaroto", ["Kamehameha", "Kaioken"]);

console.log(goku);  // Person { name: 'Goku', age: 44, nickname: 'Kakaroto', skills: [ 'Kamehameha', 'Kaioken' ] }
goku.toIntroduce(); // Oi, eu sou Goku!

// Adicionando múltiplas propriedades e métodos ao prototype
Person.prototype = {
    job: "Desenvolvedor",
    mySkills()    {
        console.log(`Minhas habilidades são: ${this.skills}!`)
    }
};

Person.prototype.test = 1;

const alex = new Person("Alex", 21, "Xella", ["HTML", "CSS", "JavaScript", "React"]);

console.log(alex); // { name: 'Alex', age: 21, nickname: 'Xella', skills: [ 'HTML', 'CSS', 'JavaScript', 'React' ] }
alex.mySkills(); // Minhas habilidades são: HTML,CSS,JavaScript,React!
// console.log(goku.test); -> Erro
console.log(alex.test); // 1

// Verificando o que tem nos prototypes dos objetos
console.log(alex.constructor.prototype); // [Object: null prototype] {}
console.log(goku.constructor.prototype); // { job: 'Desenvolvedor', mySkills: [Function: mySkills], test: 1 }

// Verificando propriedades (no objeto)
console.log(goku.hasOwnProperty("test")); // false
console.log(alex.hasOwnProperty("test")); // false

console.log(goku.hasOwnProperty("job")); // false
console.log(alex.hasOwnProperty("job")); // false

console.log(goku.hasOwnProperty("name")); // true
console.log(alex.hasOwnProperty("name")); // true

console.log(goku.hasOwnProperty("age")); // true
console.log(alex.hasOwnProperty("age")); // true

// Verificando propriedades (no prototype)
console.log(goku.constructor.prototype.hasOwnProperty("test")); // true
console.log(alex.constructor.prototype.hasOwnProperty("test")); // false

console.log(goku.constructor.prototype.hasOwnProperty("job")); // true
console.log(alex.constructor.prototype.hasOwnProperty("job")); // false

console.log(goku.constructor.prototype.hasOwnProperty("name")); // false
console.log(alex.constructor.prototype.hasOwnProperty("name")); // false

console.log(goku.constructor.prototype.hasOwnProperty("age")); // false
console.log(alex.constructor.prototype.hasOwnProperty("age")); // false

//Verificando onde está a propriedade
if(goku.hasOwnProperty("name")) {
    console.log("A propriedade está no objeto!"); // A propriedade está no objeto!
}
else if(goku.constructor.prototype.hasOwnProperty("name")) {
    console.log("A propriedade está no prototype!");
}
else {
    console.log("A propriedade não existe!");
}

// Checando se um objeto é prototype de outro objeto
const features = {
    hands: 2,
    feets: 2,
    legs: 2
};

function Human(name)    {
    this.name = name;
}

Human.prototype = features;

const person = new Human("Leonardo");

console.log(features.isPrototypeOf(person)); // true

// Criando um novo método para o objeto Array
Array.prototype.checkLength = function() { 
    return this.length; 
};

const myArray = [1, 2, 3, 4, 5];

console.log(myArray.checkLength()); // 5

// Criando novos métodos para o objeto Number
Number.prototype.square = function() { 
    return this * this; 
};

Number.prototype.double = function() { 
    return this * 2; 
};

const myNumber = 6;

console.log(myNumber.square()); // 36
console.log(myNumber.double()); // 12

// Realizando checagem, para ver se o método que queremos criar, já existe
if(typeof Number.prototype.triple !== "function")   {
    Number.prototype.triple = function() { 
        return this * 3; 
    };
}

console.log(myNumber.triple()); // 18