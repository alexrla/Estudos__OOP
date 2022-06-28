function test() {
    console.log("Testando...");
}

test();

console.log(test instanceof Function);
console.log(test.prototype);
console.log(typeof test.prototype);

test.prototype.propertyOne = "1";

console.log(test.prototype);
console.log(test.prototype.propertyOne);

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

console.log(goku);
goku.toIntroduce();

// Adicionando múltiplas propriedades e métodos ao prototype
Person.prototype = {
    job: "Desenvolvedor",
    mySkills()    {
        console.log(`Minhas habilidades são: ${this.skills}!`)
    }
};

Person.prototype.test = 1;

const alex = new Person("Alex", 21, "Xella", ["HTML", "CSS", "JavaScript", "React"]);

console.log(alex);
alex.mySkills();
// console.log(goku.test); -> Erro
console.log(alex.test);

// Verificando o que tem nos prototypes dos objetos
console.log(alex.constructor.prototype);
console.log(goku.constructor.prototype);

// Verificando propriedades (no objeto)
console.log(goku.hasOwnProperty("test"));
console.log(alex.hasOwnProperty("test"));

console.log(goku.hasOwnProperty("job"));
console.log(alex.hasOwnProperty("job"));

console.log(goku.hasOwnProperty("name"));
console.log(alex.hasOwnProperty("name"));

console.log(goku.hasOwnProperty("age"));
console.log(alex.hasOwnProperty("age"));

// Verificando propriedades (no prototype)
console.log(goku.constructor.prototype.hasOwnProperty("test"));
console.log(alex.constructor.prototype.hasOwnProperty("test"));

console.log(goku.constructor.prototype.hasOwnProperty("job"));
console.log(alex.constructor.prototype.hasOwnProperty("job"));

console.log(goku.constructor.prototype.hasOwnProperty("name"));
console.log(alex.constructor.prototype.hasOwnProperty("name"));

console.log(goku.constructor.prototype.hasOwnProperty("age"));
console.log(alex.constructor.prototype.hasOwnProperty("age"));

//Verificando onde está a propriedade
if(goku.hasOwnProperty("name")) {
    console.log("A propriedade está no objeto!");
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

console.log(features.isPrototypeOf(person));

// Criando um novo método para o objeto Array
Array.prototype.checkLength = function() { 
    return this.length; 
};

const myArray = [1, 2, 3, 4, 5];

console.log(myArray.checkLength());

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