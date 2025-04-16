function calcularSuma() {
    let n = document.getElementById("n").value;
    n = parseInt(n);

    // Validar que el valor de N sea un número positivo
    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingresa un número válido mayor que 0.");
        return;
    }

    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }

    // Mostrar el resultado
    document.getElementById("resultado").textContent = `La suma de los primeros ${n} números naturales es: ${suma}`;
}
