const menu = document.getElementById('hamburger');
const nav = document.getElementById('nav-list');
const artist = document.getElementById('artist');
const icon = document.getElementById('menu-icon');

// menu
const toggleButton = () => {
    nav.classList.toggle('show');
    artist.classList.toggle('hide');
    // Cambiar el ícono
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
}
menu.addEventListener('click', toggleButton);