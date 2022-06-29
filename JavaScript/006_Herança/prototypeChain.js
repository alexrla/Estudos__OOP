function Person()   {
    this.hands = 2;
    this.feet = 2;
    this.speak = function()   {
        console.log("Oi!")
    };
}

function Man(name)   {
    this.name = name;
}

Man.prototype = new Person(); // Man passa a herdar todas as propriedades e métodos do Person

const joao = new Man("João");

console.log(joao); // Person { name: 'João' }

joao.speak(); // Oi!


// Checando a herança
console.log(joao instanceof Person); // true
console.log(joao instanceof Man); // true
console.log(joao instanceof Object); // true


// Herança via prototype
function Vehicle()  {}

Vehicle.prototype.wheels = true;
Vehicle.prototype.start =  function() {
    console.log("Ligando veículo...");
};

function Car(model)  {
    this.type = "Carro";
    this.model = model;
}

function Motorcycle(model)  {
    this.type = "Moto";
    this.model = model;
}

Car.prototype = new Vehicle;
Motorcycle.prototype = new Vehicle;

const myCar = new Car("Sedan");
const myMotorcycle = new Motorcycle("Sreet");

console.log(myCar); // Vehicle { type: 'Carro', model: 'Sedan' }
myCar.start(); // Ligando veículo...

console.log(myMotorcycle); // Vehicle { type: 'Moto', model: 'Sreet' }
myCar.start(); // Ligando veículo...


// Clonando apenas o prototype
function NewVehicle()   {}

NewVehicle.prototype.wheels = true;
NewVehicle.prototype.start =  function() {
    console.log("Ligando veículo...");
};

function NewCar(model)  {
    this.type = "Carro";
    this.model = model;
}

function NewMotorcycle(model)  {
    this.type = "Moto";
    this.model = model;
}

// Clonando
NewCar.prototype = NewVehicle.prototype;
NewMotorcycle.prototype = NewVehicle.prototype;

const myNewCar = new NewCar("Sedan");
const myNewMotorcycle = new NewMotorcycle("Sreet");

myNewCar.start(); // Ligando veículo...
myNewMotorcycle.start(); // Ligando veículo...

console.log(myNewCar); // NewVehicle { type: 'Carro', model: 'Sedan' }
console.log(myNewMotorcycle); // NewVehicle { type: 'Moto', model: 'Sreet' }

// Mudanças em cadeia
myNewCar.start(); // Ligando veículo...
myNewMotorcycle.start(); // Ligando veículo...

// O método original também vai ser alterado
NewCar.prototype.start = function() {
    console.log("Ligando carro...");
};

myNewCar.start(); // Ligando carro...
myNewMotorcycle.start(); // Ligando carro...

NewMotorcycle.prototype.start = function() {
    console.log("Ligando moto...");
};

myNewCar.start(); // Ligando moto...
myNewMotorcycle.start(); // Ligando moto...

// Construtor temporário
function NewAirplane(model)  {
    this.type = "Avião";
    this.model = model;
}

const ConstructorTemporary = function() {};

// Clonando o prototype, com o construtor temporário
ConstructorTemporary.prototype = NewVehicle.prototype;

// Como estamos instanciando, vamos criar um novo objeto
NewAirplane.prototype = new ConstructorTemporary();

const myNewPlane = new NewAirplane("Supersônico");
console.log(myNewPlane); // NewVehicle { type: 'Avião', model: 'Supersônico' }

myNewPlane.start(); // Ligando moto...

NewAirplane.prototype.start = function() {
    console.log("Ligando avião...");
};

myNewPlane.start(); // Ligando avião...
myNewCar.start(); // Ligando moto...
myNewMotorcycle.start(); // Ligando moto...

// Função geradora de herança (construtor temporário por função)
function extend(Son, Father)   {
    const ConstructorTemporary = function() {};
    ConstructorTemporary.prototype = Father.prototype;
    Son.prototype = new ConstructorTemporary();
}

function NewRailVehicle(model)  {
    this.type = "Veículo Ferroviário";
    this.model = model;
}

extend(NewRailVehicle, NewVehicle);

const myNewRailVehicle = new NewRailVehicle("Locomotiva");

NewRailVehicle.prototype.start = function() {
    console.log("Ligando locomotiva...");
}

myNewRailVehicle.start(); // Ligando locomotiva...
myNewPlane.start(); // Ligando avião...
myNewCar.start(); // Ligando moto...
myNewMotorcycle.start(); // Ligando moto...

console.log(myNewRailVehicle); // NewVehicle { type: 'Veículo Ferroviário', model: 'Locomotiva' }

// Copiando as propriedades (sem construtor temporário)
function newExtend(Son, Father) {
    const fatherPrototype = Father.prototype;
    const sonPrototype = Son.prototype;

    for(let i in fatherPrototype)   {
        sonPrototype[i] = fatherPrototype[i];
    }

    // Fazendo com que o "Filho" tenha acesso ao prototype "objeto Pai"
    // Assim é feita a cópia
    sonPrototype.uber = fatherPrototype;
}

function NewWaterVehicle(model)  {
    this.type = "Veículo Aquático";
    this.model = model;
}

newExtend(NewWaterVehicle, NewVehicle);

const myNewWaterVehicle = new NewWaterVehicle("Lancha");

NewWaterVehicle.prototype.start = function() {
    console.log("Ligando lancha...");
}

myNewWaterVehicle.start(); // Ligando lancha...
myNewRailVehicle.start(); // Ligando locomotiva...
myNewPlane.start(); // Ligando avião...
myNewCar.start(); // Ligando moto...
myNewMotorcycle.start(); // Ligando moto...

console.log(myNewWaterVehicle); // NewWaterVehicle { type: 'Veículo Aquático', model: 'Lancha' }


// Problema ao copiar propriedades através do loop (problema com arrays)
// Adicionando propriedade ao NewVehicle
NewVehicle.prototype.details = ["Teto Solar", "Ar Condicionado"];

function MyNewCar(model)  {
    this.type = "Carro de Corrida";
    this.model = model;
}

newExtend(MyNewCar, NewVehicle);

console.log(NewVehicle.prototype); // { wheels: true, start: [Function (anonymous)], details: [ 'Teto Solar', 'Ar Condicionado' ] }

MyNewCar.prototype.details.push("Motor Turbo");

console.log(NewVehicle.prototype.details); // [ 'Teto Solar', 'Ar Condicionado', 'Motor Turbo' ]