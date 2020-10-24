// Animating navigation options on the "burger" when in mobile.
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
}

// Opening menu.pdf in a new tab when the menu button is pressed.
const openMenu = () => {
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', () => {
        window.open('files/menu.pdf');
    });
}

navSlide();
openMenu();