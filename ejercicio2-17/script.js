function mostrarNumerosPares() {
    let numerosPares = [];

    // Generar los primeros 100 números pares
    for (let i = 2; i <= 200; i += 2) {
        numerosPares.push(i);
    }

    // Convertir el array a una cadena separada por comas
    let numerosParesString = numerosPares.join(", ");
    
    // Mostrar los números en un alert
    alert("Los 100 primeros números pares son: \n" + numerosParesString);
}

