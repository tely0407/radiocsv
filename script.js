

// reproductor
const audio = document.getElementById('audio');  
const playPauseButton = document.getElementById('playPause');  
const currentTimeDisplay = document.getElementById('currentTime');  
const durationDisplay = document.getElementById('duration');  
const volumeControl = document.getElementById('volumeControl');  

audio.addEventListener('loadedmetadata', function() {  
    durationDisplay.textContent = formatTime(audio.duration);  
});  

audio.addEventListener('timeupdate', function() {  
    currentTimeDisplay.textContent = formatTime(audio.currentTime);  
});  

function togglePlay() {  
    if (audio.paused) {  
        audio.play();  
        playPauseButton.textContent = '❚❚ Pause';  
    } else {  
        audio.pause();  
        playPauseButton.textContent = '► Play';  
    }  
}  

function changeVolume() {  
    audio.volume = volumeControl.value;  
}  

function formatTime(seconds) {  
    const minutes = Math.floor(seconds / 60);  
    const secs = Math.floor(seconds % 60);  
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;  
}  



    // Gallery Videos (YouTube)
    let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slides = document.querySelectorAll('.carousel .slide');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
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
    slides[index].classList.add('active');
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


    // Seleccionar el botón del menú hamburguesa y el menú desplegable
     document.addEventListener("DOMContentLoaded", function() {
        const menuToggle = document.getElementById("menu-toggle");
        const dropdownMenu = document.getElementById("dropdown-menu");
    
        menuToggle.addEventListener("click", function() {
            dropdownMenu.classList.toggle("active");
        });
    });
    
//gallery antes del footer
function openLibrary() {
    window.location.href = 'https://biblioteca-ejemplo.com';
}

const news = [
    "Noticia 1",
    "Noticia 2",
    "Noticia 3"
];

let currentNewsIndex = 0;

function nextNews() {
    currentNewsIndex = (currentNewsIndex + 1) % news.length;
    document.getElementById('newsContent').innerText = news[currentNewsIndex];
}

setInterval(() => {
    document.querySelector('.gallery').style.animation = 'slide 6s infinite';
}, 2000);

//noticias
document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'c317e668bdd8576edb0de59f12b51807';  // Clave de API de GNews
    const apiUrl = `https://gnews.io/api/v4/top-headlines?lang=es&country=ar&apikey=${apiKey}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);  // Verifica la estructura de los datos
        const articles = data.articles.slice(0, 3);  // Tomar los primeros 3 artículos

        articles.forEach((article, index) => {
            const newsItem = document.getElementById('news' + (index + 1));
            if (newsItem) {  // Asegúrate de que el elemento exista antes de manipularlo
                newsItem.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.description || 'No description available.'}</p>
                    <a href="${article.url}" target="_blank">Leer más</a>
                `;
            }
        });
    })
    .catch(error => console.error('Error fetching news:', error));
});
//reproductor
const radioPlayer = document.getElementById('radioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const playPauseIcon = document.getElementById('playPauseIcon');
const timer = document.getElementById('timer');
const volumeControl = document.getElementById('volumeControl');
const volumeIcon = document.getElementById('volumeIcon');

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        radioPlayer.pause();
        playPauseIcon.textContent = '▶️';
    } else {
        radioPlayer.play();
        playPauseIcon.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
});

radioPlayer.addEventListener('timeupdate', () => {
    const minutes = Math.floor(radioPlayer.currentTime / 60);
    const seconds = Math.floor(radioPlayer.currentTime % 60);
    timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
});

volumeControl.addEventListener('input', () => {
    radioPlayer.volume = volumeControl.value;
});

volumeControl.addEventListener('input', () => {
    if (volumeControl.value == 0) {
        volumeIcon.textContent = '🔇';
    } else if (volumeControl.value < 0.5) {
        volumeIcon.textContent = '🔉';
    } else {
        volumeIcon.textContent = '🔊';
    }
=======

// reproductor
const audio = document.getElementById('audio');  
const playPauseButton = document.getElementById('playPause');  
const currentTimeDisplay = document.getElementById('currentTime');  
const durationDisplay = document.getElementById('duration');  
const volumeControl = document.getElementById('volumeControl');  

audio.addEventListener('loadedmetadata', function() {  
    durationDisplay.textContent = formatTime(audio.duration);  
});  

audio.addEventListener('timeupdate', function() {  
    currentTimeDisplay.textContent = formatTime(audio.currentTime);  
});  

function togglePlay() {  
    if (audio.paused) {  
        audio.play();  
        playPauseButton.textContent = '❚❚ Pause';  
    } else {  
        audio.pause();  
        playPauseButton.textContent = '► Play';  
    }  
}  

function changeVolume() {  
    audio.volume = volumeControl.value;  
}  

function formatTime(seconds) {  
    const minutes = Math.floor(seconds / 60);  
    const secs = Math.floor(seconds % 60);  
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;  
}  
