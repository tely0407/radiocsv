

//carrousel

const slides = document.querySelectorAll('.carousel .slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;
let intervalId;

// Mostrar la primera imagen al cargar la página
showSlide(currentIndex);

// Función para mostrar un slide específico
function showSlide(index) {
    // Ocultar todos los slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    // Mostrar el slide indicado por el índice
    if (slides[index]) {
        slides[index].classList.add('active');
      }
}

// Función para mostrar el slide anterior
function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Función para mostrar el slide siguiente
function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Función para iniciar el carrusel automático
function startCarousel() {
    intervalId = setInterval(showNextSlide, 3000); // Cambia la imagen cada 3 segundos
}

// Función para detener el carrusel automático
function stopCarousel() {
    clearInterval(intervalId);
}

// Event listeners para los botones de anterior y siguiente
prevButton.addEventListener('click', () => {
    stopCarousel(); // Detener el carrusel automático al hacer clic en anterior
    showPrevSlide();
});
nextButton.addEventListener('click', () => {
    stopCarousel(); // Detener el carrusel automático al hacer clic en siguiente
    showNextSlide();
});

// Iniciar el carrusel automático al cargar la página
startCarousel();
// Videos alternativos del streaming
const express = require('express');
const app = express();
const axios = require('axios');

app.get('/check-stream', async (req, res) => {
    try {
        const response = await axios.head('https://nd106.republicaservers.com/csvradio.html');
        res.json({ streaming: response.status === 200 });
    } catch (error) {
        res.json({ streaming: false });
    }
});

app.listen(3000, () => {
    console.log('Servicio de verificación en el puerto 3000');
});
