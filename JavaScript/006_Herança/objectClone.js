// Solucionando o problema de copiar por loop, envolvendo arrays

function objectClone(objectFather, objectSon)   {
    let newObjectSon;

    function constructorTemporary() {}

    constructorTemporary.prototype = objectFather;

    newObjectSon = new constructorTemporary();

    newObjectSon.uber = objectFather;

    for(let i in objectSon) {
        newObjectSon[i] = objectSon[i];
    }

    return newObjectSon;
}

function Vehicle()  {
    this.wheels = true;
    this.details = ["Teto Solar", "Ar Condicionado"];
    this.start = function() {
        console.log("Ligando veículo...");
    }
}

function Car(model)  {
    this.type = "Carro";
    this.model = model;
}

let newVehicle = new Vehicle;

let myCar = objectClone(newVehicle, {
    type:"Carro",
    model: "Sedan"
});

console.log(myCar);
/* 
    Resultado [console.log() acima]:

        Vehicle {
            uber: Vehicle {
                wheels: true,
                details: [ 'Teto Solar', 'Ar Condicionado' ],
                start: [Function (anonymous)]
            },
            type: 'Carro',
            model: 'Sedan'
        }
*/

myCar.details.push("Motor Turbo");

console.log(myCar);
/* 
    Resultado [console.log() acima]:

        Vehicle {
            uber: Vehicle {
                wheels: true,
                details: [ 'Teto Solar', 'Ar Condicionado', 'Motor Turbo' ],
                start: [Function (anonymous)]
            },
            type: 'Carro',
            model: 'Sedan'
        }
*/

console.log(Vehicle.toString());
/*
    Resultado [console.log() acima]:

        function Vehicle()  {
            this.wheels = true;
            this.details = ["Teto Solar", "Ar Condicionado"];
            this.start = function() {
                console.log("Ligando veículo...");
            }
        }
*/