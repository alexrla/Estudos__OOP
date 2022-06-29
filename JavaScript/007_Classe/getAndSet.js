class Human     {
    constructor(name, age)  {
        this.name = name;
        this.age = age;
    }

    get receiveName()   {
        return `O nome da pessoa é ${this.name}.`;
    }
    set changeTreatment(newName)    {
        this.name = `Sr (a) ${newName}`
    }

    toIntroduce()   {
        console.log(`Oi! Meu nome é ${this.name}.`)
    }
}

console.log(typeof Human); // function

const leandro = new Human("Leandro", 30);

console.log(leandro); // Human { name: 'Leandro', age: 30 }

leandro.toIntroduce(); // Oi! Meu nome é Leandro.

leandro.changeTreatment = "Leandrinho";

leandro.toIntroduce(); // Oi! Meu nome é Sr (a) Leandrinho.

console.log(leandro.receiveName); // O nome da pessoa é Sr (a) Leandrinho.