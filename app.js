let sections = document.querySelectorAll('.div-project-tile');

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > lastScrollY) {
        // User is scrolling down, hide the header
        header.style.top = '-60px'; // Adjust based on header height
    } else {
        // User is scrolling up, show the header
        header.style.top = '0';
    }
    lastScrollY = window.scrollY;
});


document.addEventListener('DOMContentLoaded', function () {
    const tiles = document.querySelectorAll('.div-project-tile');

    const observerOptions = {
        threshold: 0.1 // When 10% of the tile is visible
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
});
