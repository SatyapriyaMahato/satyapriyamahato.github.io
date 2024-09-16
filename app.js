// const menuBtn = document.querySelector(".menu-button");
// menuBtn.addEventListener("click", function () {
//     document.querySelector(".site-logo").classList.toggle("alt-logo");
//     document.querySelector(".menu-social-icons").classList.toggle("hidden");
//     document.body.style.position = "fixed";

// })

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}