function sumarNumerosImpares() {
    // Solicitar al usuario cuántos números impares desea sumar
    let N = parseInt(prompt("¿Cuántos primeros números impares deseas sumar?"));

    // Verificar que N sea un número válido
    if (isNaN(N) || N <= 0) {
        alert("Por favor ingresa un número válido para N.");
        return;
    }

    let suma = 0;
    let contador = 0;
    let numero = 1;  // Empezamos con el primer número impar

    // Sumar los primeros N números impares
    while (contador < N) {
        suma += numero;
        numero += 2;  // Incrementamos de 2 en 2 para obtener los siguientes números impares
        contador++;
    }

    // Mostrar el resultado en un alert
    alert(`La suma de los primeros ${N} números impares es: ${suma}`);
}

