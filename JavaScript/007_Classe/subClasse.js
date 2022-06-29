class Human     {
    constructor(name, age)  {
        this.name = name;
        this.age = age;
    }

    toIntroduce()   {
        console.log(`Oi! Meu nome é ${this.name}.`)
    }
}

class Developer extends Human {
    constructor(name, age)   {
        super(name, age); // Passadas para a classe do pai
        
        this.profession = "Desenvolvedor";
    }
}

const leandro = new Developer("Leandro", 30);

console.log(leandro); // Developer { name: 'Leandro', age: 30, profession: 'Desenvolvedor' }

leandro.toIntroduce(); // Oi! Meu nome é Leandro.