/*
    - Crie uma função que retorna se o objeto é uma instância de outro objeto;

    - Deve apresenta no console, as mensagens de positivo ou negativo;
*/

function checkingObjects(objectFather, objectSon)  {
    if(objectSon instanceof objectFather)  {
        console.log("Positivo!");
    }
    else    {
        console.log("Negativo!");
    }
}

function testReturn()   {
    return {
        teste: 2
    }
}

function Test()    {
    this.test = 1;
}

const myObject = new Test;
const myNewObject = testReturn();

checkingObjects(Test, myObject);

checkingObjects(testReturn, myNewObject);
checkingObjects(Object, myNewObject);