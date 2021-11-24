let nav_button = document.getElementById('nav-button');
let nav_menu = document.querySelector('.nav__menu');
let check = document.getElementById('check');

nav_button.addEventListener('click', () => {
  nav_menu.classList.toggle('nav__menu--show');
});

nav_button.addEventListener('blur', () => {
  nav_menu.classList.toggle('nav__menu--show');
}, true);

check.addEventListener('click', () => {
  check.checked ? location.href = "../en/index.html" : location.href = "../index.html"
})