let menuToggle = document.querySelector(".menu-btn");
let closeMenu = document.querySelector(".close-menu-btn");
let body = document.querySelector("body");
menuToggle.onclick = function() {
    menuToggle.classList.toggle('active');
    body.classList.add('fixed-position');
}
closeMenu.onclick = function() {
    menuToggle.classList.remove('active');
    body.classList.remove('fixed-position');
}