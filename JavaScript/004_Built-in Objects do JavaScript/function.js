const teste = new Function("message", "return arguments");

console.log(teste("Hello, World!")); // [Arguments] { '0': 'Hello, World!' }
console.log(teste("Hello, World!")[0]); // Hello, World!

function test(a, b) {
    return a + b;
}

console.log(test.length); // 2

const a = {
    name: "Leandro",
    // Function
    sayMyName() {
        console.log(`Meu nome é ${this.name}`);
    }
};

const b = {
    name: "Bianca"
};

a.sayMyName(); // Meu nome é Leandro
a.sayMyName.call(b); // Meu nome é Bianca
