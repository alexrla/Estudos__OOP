try     {
    // Instruções que esperamos que dê certo
    throw new Error("Deu um problema no código!");
} catch(error)  {
    console.log(error.name + ": " + error.message); // Error: Deu um problema no código!
}