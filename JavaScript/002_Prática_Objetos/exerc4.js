/*
    - No objeto Ninja, crie a propriedade shuriken, passando a quantidade;

    - A cada método disparado, subtraia um;

    - O ninja não pode joga mais shurikens caso elas tenham acabado;
*/

function Ninja(ninjaName, amountShurikens)    {
    this.ninjaName = ninjaName;
    this.shurikens = amountShurikens;
    this.throwShuriken = function() {
        if(this.shurikens === 0)    {
            console.log("As suas shurikens acabaram");
        }
        else    {
            console.log("Atirando shuriken...");
            this.shurikens -= 1;
        }
    }
}

const narutinho = new Ninja("Naruto", 3);

console.log(narutinho.ninjaName);
narutinho.throwShuriken();
narutinho.throwShuriken();
narutinho.throwShuriken();
narutinho.throwShuriken();