/*
    - Crie dois objetos que compartilhem nomes de propriedades via object literals;

    - Um variável deve definir que parte se repete nas propriedades dos objetos;
*/

const repeat = "quantity_of_";

const car = {
    color: "preto",
    [repeat+"doors"]: 4
};

const animal = {
    type: "cavalo",
    [repeat+"paws"]: 4
};

console.log(car.quantity_of_doors); // 4
console.log(animal.quantity_of_paws); // 4