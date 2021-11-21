let nav_button = document.getElementById('nav-button');
let nav_menu = document.querySelector('.nav__menu');

nav_button.addEventListener('click', () => {
  nav_menu.classList.toggle('nav__menu--show');
});

nav_button.addEventListener('blur', () => {
  nav_menu.classList.toggle('nav__menu--show');
}, true);