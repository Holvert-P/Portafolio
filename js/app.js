let nav_button = document.getElementById('nav__button');
let nav_menu = document.querySelector('.nav__menu');
let check = document.getElementById('check');
let check_dark = document.getElementById('check-dark');
let value = localStorage.getItem('check');

if (value === 'true') {
  check_dark.setAttribute('checked', 'checked');
}
nav_button.addEventListener('click', () => {
  nav_menu.classList.toggle('nav__menu--show');
});

nav_button.addEventListener('blur', () => {
  nav_menu.classList.remove('nav__menu--show');
}, true);

check.addEventListener('click', () => {
  check.checked ? (location.href = "https://hdevsportafolio.vercel.app/en/", localStorage.setItem('check', check_dark.checked)) : (location.href = "https://hdevsportafolio.vercel.app/", localStorage.setItem('check', check_dark.checked))
})