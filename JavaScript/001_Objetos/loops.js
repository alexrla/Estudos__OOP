// Loops em objetos

// O mais indicado é o for ...in
function Person(name, lastname, age) {
    this.name = name;
    this.lastname = lastname
    this.age = age;
}

const alex = new Person("Alex", "Arruda", 21);

for(property in alex)   {
    console.log(`${property}: ${alex[property]}`);
}



// O for normal serve mais para arrays