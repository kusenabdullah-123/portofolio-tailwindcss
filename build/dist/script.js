// function change color icon
const changeIcons = (icons, color) => {
  icons.forEach((el) => {
    el.children[0].children[0].attributes[0].value = color;
  });
};

// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;
  const toTop = document.querySelector("#to-top");
  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Mode
const darkToogle = document.querySelector("#dark-toogle");
const html = document.querySelector("html");
const icon = document.querySelectorAll("span#icon-blog");

darkToogle.addEventListener("click", (e) => {
  if (darkToogle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
    changeIcons(icon, "white");
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
    changeIcons(icon, "black");
  }
});

// toogle dark mode and toogle color icon

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToogle.checked = true;
  changeIcons(icon, "white");
} else {
  darkToogle.checked = false;
  changeIcons(icon, "black");
}
