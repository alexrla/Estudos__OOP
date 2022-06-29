/*
    - Crie o objeto Ninja, por constructor function;

    - Com a propriedade de nome do Ninja e o método atirarShuriken;
*/

function Ninja(ninjaName)    {
    this.ninjaName = ninjaName;
    this.throwShuriken = function() {
        console.log("Atirando shuriken...");
    }
}

const narutinho = new Ninja("Naruto");

console.log(narutinho.ninjaName); // Naruto
narutinho.throwShuriken(); // Atirando shuriken...