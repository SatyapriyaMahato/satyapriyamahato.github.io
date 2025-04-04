
document.querySelectorAll("img, video").forEach((el) => {
    el.addEventListener("contextmenu", (e) => e.preventDefault());
});



// Theme toggle function
const themeToggleBtn = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");


themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    updateIcon(newTheme);
});

// Function to update the icon based on the theme
function updateIcon(theme) {
    if (theme === "dark") {
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
    } else {
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
    }
}


let sections = document.querySelectorAll('.div-project-tile');

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > lastScrollY) {
        header.style.top = '-60px';
    } else {

        header.style.top = '0';
    }
    lastScrollY = window.scrollY;
});






document.addEventListener('DOMContentLoaded', function () {
    const aboutImage = document.querySelector('.div-about-image');
    const aboutDetail = document.querySelector('.div-about-description');
    const tiles = document.querySelectorAll('.project-description');
    const images = document.querySelectorAll('.project-image');
    const form = document.querySelector('.div-contact-form');
    const contactIcons = document.querySelector('.div-contact-icons');

    const observerOptions = {
        threshold: 0.4 // % of the tile is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    tiles.forEach(tile => {
        observer.observe(tile);
    });
    images.forEach(image => {
        observer.observe(image);
    });

    observer.observe(form);
    observer.observe(contactIcons);
    observer.observe(aboutDetail);
    observer.observe(aboutImage);
});

const videos = document.querySelectorAll('.project-video');

videos.forEach((vid) => {
    vid.addEventListener('mouseover', function () {
        vid.play();
    });
});


videos.forEach((vid) => {
    vid.addEventListener('mouseout', function () {
        vid.pause();
        vid.currentTime = 0;
    });
});


const form = document.getElementById('ContactForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(form);

    form.reset();

});


