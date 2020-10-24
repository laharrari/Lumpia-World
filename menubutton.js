// Opening menu.pdf in a new tab when the menu button is pressed.
const openMenu = () => {
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', () => {
        window.open('files/menu.pdf');
    });
}

openMenu();