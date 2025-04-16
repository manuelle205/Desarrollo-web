function sumarNumeros() {
    // Leer el valor de N
    let N = parseInt(prompt("¿Cuántos números deseas sumar?"));

    // Verificar que N sea un número válido
    if (isNaN(N) || N <= 0) {
        alert("Por favor ingresa un número válido para N.");
        return;
    }

    let suma = 0;

    // Leer N números y sumarlos
    for (let i = 1; i <= N; i++) {
        let num = parseFloat(prompt(`Introduce el número ${i}:`));

        // Verificar que cada número sea válido
        if (isNaN(num)) {
            alert(`El valor introducido no es un número válido. Terminaré el proceso.`);
            return;
        }

        suma += num; // Sumar el número
    }

    // Mostrar el resultado en un alert
    alert(`La suma de los ${N} números es: ${suma}`);
}
