function multipleHeritage() {
    let emptyObject = {};
    let size = arguments.length;
    let something;

    for(let i = 0; i < size; i++)   {
        something = arguments[i];

        for(let j in something) {
            if(something.hasOwnProperty(j)) {
                emptyObject[j] = something[j];
            }
        }
    }

    return emptyObject;
}

// Pneu
const wheel = {
    material: "Borracha"
};

// Aro
const rim = {
    size: 20
};

// Pneu montado
const mountedTire = multipleHeritage(wheel, rim); // Podemos ter mais de dois objetos

console.log(mountedTire); // { material: 'Borracha', size: 20 }