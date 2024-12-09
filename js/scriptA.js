// Inicialización de tooltips
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Carrusel Soluciones
const track = document.querySelector('.soluciones-carousel-track');
const prevButton = document.querySelector('.soluciones-carousel-btn.prev');
const nextButton = document.querySelector('.soluciones-carousel-btn.next');

// Índice inicial
let currentIndex = 0;

// Actualiza la posición del carrusel
function updateCarousel() {
    const cardWidth = track.children[0].offsetWidth + 30; // Ancho de la tarjeta + espacio entre tarjetas
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Evento para el botón "Anterior"
prevButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0); // No permite índices negativos
    updateCarousel();
});

// Evento para el botón "Siguiente"
nextButton.addEventListener('click', () => {
    const totalCards = track.children.length;
    currentIndex = Math.min(currentIndex + 1, totalCards - 1); // No permite avanzar más allá de las tarjetas disponibles
    updateCarousel();
});

// Auto-desplazamiento opcional
setInterval(() => {
    const totalCards = track.children.length;
    currentIndex = (currentIndex + 1) % totalCards; // Ciclo infinito
    updateCarousel();
}, 7000); // Cambia cada 7 segundos