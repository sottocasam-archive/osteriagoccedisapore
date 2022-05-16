const menuBtn = document.querySelector('.menu-btn');
const menu = $('#menu')[0];
let menuOpen = false;

if (innerWidth < 768) menu.classList.add('animate__zoomOutLeft');

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menu.classList.add('menu__open', 'animate__zoomInLeft');
        menu.classList.remove('animate__zoomOutLeft');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menu.classList.add('animate__zoomOutLeft');
        setTimeout(() => { menu.classList.remove('menu__open', 'animate__zoomInLeft'); }, 1000);
        menuOpen = false;
    }
});

function toggleMenu() {
    //alert(2)
    $("#menu").toggle;
}