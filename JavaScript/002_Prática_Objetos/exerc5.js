/*
    - Crie um objeto Inimigo, com as propriedades nome e vivo (que é um boolean e inicia com true);

    - O método atirarShuriken do exercício passado, deve "matar" o inimo, setando a propriedade do Inimigo como false;
*/

function Ninja(ninjaName, amountShurikens)    {
    this.ninjaName = ninjaName;
    this.shurikens = amountShurikens;
    this.throwShuriken = function(enemy) {
        if(this.shurikens === 0)    {
            console.log("As suas shurikens acabaram");
        }
        else    {
            console.log("Atirando shuriken...");
            console.log(`${enemy.enemyName} morreu!`);
            this.shurikens -= 1;
            enemy.alive = false;
        }
    }
}

function Enemy(enemyName)    {
    this.enemyName = enemyName;
    this.alive = true
}

const narutinho = new Ninja("Naruto", 3);
const uchihaMadara = new Enemy("Madara");

console.log(narutinho); // Ninja { ninjaName: 'Naruto', shurikens: 3, throwShuriken: [Function (anonymous)] }
console.log(uchihaMadara); // Enemy { enemyName: 'Madara', alive: true }

narutinho.throwShuriken(uchihaMadara); // Atirando shuriken... Madara morreu!

console.log(uchihaMadara); // Enemy { enemyName: 'Madara', alive: false }