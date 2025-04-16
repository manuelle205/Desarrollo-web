function sumarNumeros() {
    // Obtener los valores de los inputs
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let num3 = parseFloat(document.getElementById("numero3").value);
    let num4 = parseFloat(document.getElementById("numero4").value);
    let num5 = parseFloat(document.getElementById("numero5").value);

    // Verificar que los valores no sean NaN (Not a Number)
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        alert("Por favor ingresa números válidos en todos los campos.");
        return;
    }

    // Sumar los números
    let suma = num1 + num2 + num3 + num4 + num5;

    // Mostrar el resultado en un alert
    alert("La suma de los 5 números es: " + suma);
}

