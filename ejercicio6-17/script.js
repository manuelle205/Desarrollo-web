function realizarOperacion() {
    // Solicitar los dos números al usuario
    let num1 = parseFloat(prompt("Introduce el primer número:"));
    let num2 = parseFloat(prompt("Introduce el segundo número:"));

    // Verificar que los valores sean números válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor ingresa números válidos.");
        return;
    }

    // Solicitar al usuario elegir la operación
    let operacion = prompt("¿Qué operación deseas realizar? \n1. Sumar \n2. Restar \n3. Multiplicar \n4. Dividir");

    let resultado;

    // Realizar la operación según lo que elija el usuario
    switch (operacion) {
        case "1":
            resultado = num1 + num2;
            alert("El resultado de la suma es: " + resultado);
            break;
        case "2":
            resultado = num1 - num2;
            alert("El resultado de la resta es: " + resultado);
            break;
        case "3":
            resultado = num1 * num2;
            alert("El resultado de la multiplicación es: " + resultado);
            break;
        case "4":
            // Verificar si el segundo número es cero para evitar división por cero
            if (num2 === 0) {
                alert("No se puede dividir por cero.");
            } else {
                resultado = num1 / num2;
                alert("El resultado de la división es: " + resultado);
            }
            break;
        default:
            alert("Opción no válida. Por favor elige una opción entre 1 y 4.");
            break;
    }
}
