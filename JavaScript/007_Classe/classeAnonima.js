const Human = class     {
    constructor(name, age)  {
        this.name = name;
        this.age = age;
    }

    toIntroduce()   {
        console.log(`Oi! Meu nome é ${this.name}.`)
    }
}

console.log(typeof Human); // function

const leandro = new Human("Leandro", 30);

console.log(leandro); // Human { name: 'Leandro', age: 30 }

leandro.toIntroduce(); // Oi! Meu nome é Leandro.