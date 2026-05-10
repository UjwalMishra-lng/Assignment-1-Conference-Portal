const hamBtn = document.getElementById('hamburger-btn');
const menu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

hamBtn.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden', !isOpen ? true : false);
    closeIcon.classList.toggle('hidden', !isOpen ? false : true);
    hamBtn.setAttribute('aria-expanded', String(!isOpen));
});
