function generarImpares() {
    let lista = document.getElementById("lista-impares");
    lista.innerHTML = ""; // Limpiar la lista antes de generar nuevos números

    // Generar los primeros 100 números impares
    for (let i = 1; i <= 199; i += 2) {
        let item = document.createElement("li"); // Crear un elemento <li>
        item.textContent = i; // Asignar el número impar
        lista.appendChild(item); // Agregar el número a la lista
    }

    // Mostrar alerta cuando se han generado los números
    alert("Los 100 primeros números impares han sido generados en la lista.");
}
