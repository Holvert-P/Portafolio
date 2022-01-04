const nav_button = document.getElementById("nav__button");
const nav_menu = document.querySelector(".nav__menu");
const check = document.getElementById("check");
const check_dark = document.getElementById("check-dark");
const value = localStorage.getItem("check");

const message__input = document.querySelectorAll(".contact__form [required]");

message__input.forEach((el) => {
  const message__error = document.querySelectorAll(".message__error");

  el.addEventListener("keyup", (e) => {
    let $input = e.target,
      pattern = $input.pattern || $input.dataset.pattern;
    console.log(pattern);
    console.log($input.value);
    if (pattern && $input.value !== "") {
      let reg = new RegExp(pattern);
      return !reg.exec($input.value) ?
        el.nextElementSibling.classList.add("message__error--show") :
        el.nextElementSibling.classList.remove("message__error--show");
    }
  });
});
const message__loader = document.querySelector(".message__loader"),
  message__response = document.querySelector(".message__response"),
  message__button = document.getElementById("message__button");

document.addEventListener("submit", (e) => {
  e.preventDefault();
  const elements = e.target.elements;
  message__button.style.opacity = "0";
  message__loader.style.opacity = "1";


  fetch("https://formsubmit.co/ajax/pereshol13@gmail.com", {
      method: "POST",
      body: new FormData(e.target)
    }).then(res => { res.ok ? res.json() : Promise.reject(res) })
    .then(json => {
      message__loader.style.opacity = "0";
      message__response.style.opacity = "1";
      form.reset();
      setTimeout(() => {
        message__response.style.opacity = "0";
        message__button.style.opacity = "1";
      }, 2000)
    })
    .catch(err => {
      console.log(err)
    })
});

if (value === "true") {
  check_dark.setAttribute("checked", "checked");
}
const $nav = document.querySelector(".hamburger");
nav_button.addEventListener("click", () => {
  nav_menu.classList.toggle("nav__menu--show");

  $nav.classList.toggle("is-active");
});

nav_button.addEventListener(
  "blur",
  () => {
    nav_menu.classList.remove("nav__menu--show");
    $nav.classList.remove("is-active");
  },
  true
);

check.addEventListener("click", () => {
  check.checked ?
    (location.href = "../en/") :
    (location.href = "../");
});


check_dark.addEventListener("click", () => {
  localStorage.setItem("check", check_dark.checked)
});