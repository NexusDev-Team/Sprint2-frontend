const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    themeBtn.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
});