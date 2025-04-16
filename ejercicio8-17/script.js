function sumarPrimerosPares() {
    // Solicitar al usuario cuántos números pares desea sumar
    let N = parseInt(prompt("¿Cuántos primeros números pares deseas sumar?"));

    // Verificar que N sea un número válido
    if (isNaN(N) || N <= 0) {
        alert("Por favor ingresa un número válido para N.");
        return;
    }

    let suma = 0;
    let contador = 0;
    let numero = 2;  // Empezamos con el primer número par

    // Sumar los primeros N números pares
    while (contador < N) {
        suma += numero;
        numero += 2;  // Incrementamos de 2 en 2 para obtener los siguientes números pares
        contador++;
    }

    // Mostrar el resultado en un alert
    alert(`La suma de los primeros ${N} números pares es: ${suma}`);
}
