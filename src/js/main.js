const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

const slideVisual = document.getElementById("slideVisual");
const slideIcon = document.getElementById("slideIcon");
const slideTitle = document.getElementById("slideTitle");
const slideText = document.getElementById("slideText");
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");

let currentSlide = 0;

const slides = [
    {
        icon: "🤖",
        title: "IA Contextual",
        text: "A câmera analisa luz, movimento e enquadramento.",
        className: "slide-ai"
    },
    {
        icon: "📸",
        title: "Captura Inteligente",
        text: "A interface orienta o usuário antes da foto.",
        className: "slide-camera"
    },
    {
        icon: "📄",
        title: "Modo Documento",
        text: "Simulação de detecção e salvamento em PDF.",
        className: "slide-document"
    }
];

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.innerText = "☀️";
    } else {
        themeBtn.innerText = "🌙";
    }
});

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

welcomeBtn.addEventListener("click", function () {
    let nome = prompt("Digite seu nome:");

    if (nome === null || nome.trim() === "") {
        alert("Nome não informado.");
        return;
    }

    welcomeMessage.innerText = "Olá, " + nome + "! Bem-vindo ao Nexus Vision.";
});

function showSlide(index) {
    slideIcon.innerText = slides[index].icon;
    slideTitle.innerText = slides[index].title;
    slideText.innerText = slides[index].text;

    slideVisual.classList.remove("slide-ai", "slide-camera", "slide-document");
    slideVisual.classList.add(slides[index].className);
}

nextSlide.addEventListener("click", function () {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
});

prevSlide.addEventListener("click", function () {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
});

setInterval(function () {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}, 4000);