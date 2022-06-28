const teste = new Function("message", "return arguments");

console.log(teste("Hello, World!"));
console.log(teste("Hello, World!")[0]);

function test(a, b) {
    return a + b;
}

console.log(test.length);

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

a.sayMyName();
a.sayMyName.call(b);
