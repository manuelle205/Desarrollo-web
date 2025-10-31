// ==================== Efectos de hover en las tarjetas ====================

// Función para resaltar tarjeta cuando se pasa el mouse
function resaltar(elemento) {
    elemento.style.transform = "scale(1.05)";
    elemento.style.boxShadow = "0 10px 20px rgba(0,0,0,0.5)";
    elemento.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
}

// Función para restaurar tarjeta al retirar el mouse
function restaurar(elemento) {
    elemento.style.transform = "scale(1)";
    elemento.style.boxShadow = "none";
}

// ==================== Abrir proyecto al hacer click ====================
function abrirProyecto(elemento) {
    const url = elemento.getAttribute("data-url");
    if (url) {
        window.open(url, "_blank");
    }
}

// ==================== Animaciones simples de scroll ====================
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    window.addEventListener("scroll", function() {
        const scrollTop = window.scrollY + window.innerHeight;
        sections.forEach(section => {
            if (scrollTop > section.offsetTop + 100) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
                section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            }
        });
    });
});

// ==================== Tooltip para enlaces ====================
document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});
