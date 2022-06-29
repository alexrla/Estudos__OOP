/* 
    - Criar um objeto Pessoa, que contenha uma propriedade nome;

    - Criar um método que exibe o nome do objeto Pessoa;
*/

const person = {
    name: "Alex",
    sayMyName() {
        console.log(`Meu nome é: ${this.name}`);
    }
}

person.sayMyName(); // Meu nome é: Alex