/*
    - Crie um objeto que tenha características de um caminhão e coloque em propriedades distintas;
    
    - Com o destructuring, coloque essas propriedades em variáveis separadas;
*/

const truck = {
    load: 14, // carga em metros
    totalWeight: 25.5 // Peso bruto em toneladas
};

const { load, totalWeight } = truck;

console.log(load);
console.log(totalWeight);