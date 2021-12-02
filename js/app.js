const nav_button = document.getElementById('nav__button');
const nav_menu = document.querySelector('.nav__menu');
const check = document.getElementById('check');
const check_dark = document.getElementById('check-dark');
const value = localStorage.getItem('check');

const message__input = document.querySelectorAll('.contact__form [required]');

message__input.forEach(el => {
  const message__error = document.querySelectorAll('.message__error');

  el.addEventListener('keyup', e => {

    let $input = e.target,
      pattern = $input.pattern || $input.dataset.pattern;
    console.log(pattern)
    console.log($input.value)
    if (pattern && $input.value !== "") {
      let reg = new RegExp(pattern);
      return !reg.exec($input.value)
        ? el.nextElementSibling.classList.add('message__error--show')
        : el.nextElementSibling.classList.remove('message__error--show')
    }

  })
});
const message__loader = document.querySelector('.message__loader'),
  message__response = document.querySelector('.message__response'),
  message__button = document.getElementById('message__button');

document.addEventListener('submit', e => {
  e.preventDefault();
  const elements = e.target.elements;
  message__button.style.opacity = '0';
  message__loader.style.opacity = '1';

  setTimeout(() => {
    message__loader.style.opacity = '0';
    message__response.style.opacity = '1';
    sendMail(elements['email'].value, elements['message'].value, elements['name'].value, e.target)
  }, 1000);
});

const sendMail = (email, message, name, form) => {
  Email.send({
    Host: "smtp.mailtrap.io",
    Username: "2cacf3ff5d0a55",
    Password: "5af656d45c8678",
    To: "pereshol13@gmail.com",
    From: email,
    Subject: "Propuesta de trabajo",
    Body: "<p><strong>Mensaje:</strong></p><br>" + message + "<br><br><p><strong>Nombre:</strong></p>" + name
  }).then(() => {
    message__response.style.opacity = '0';
    message__button.style.opacity = '1';
    form.reset();
  });
}
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
});


