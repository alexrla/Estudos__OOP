class Human     {
    constructor(name, age)  {
        this.name = name;
        this.age = age;
    }
}

console.log(typeof Human); // function

const leandro = new Human("Leandro", 30);

console.log(leandro); // Human { name: 'Leandro', age: 30 }