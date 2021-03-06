const menuBtnContainer = document.querySelector(".menu-btn-container");
const menuBtn = document.querySelector(".menu-btn");
const drawerList = document.querySelectorAll(".drawer li");
const drawer = document.querySelector(".drawer-container");
const navBar = document.querySelector(".nav-bar");
const docBody = document.querySelector("body");
const darkModeButton = document.querySelector("#myonoffswitch");

let menuOpen = false;

const navMenuOpen = () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    drawer.classList.add("open-drawer");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    drawer.classList.remove("open-drawer");
    menuOpen = false;
  }
};

menuBtnContainer.addEventListener("click", navMenuOpen);
menuBtnContainer.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    navMenuOpen();
  }
});

drawerList.forEach((list) => {
  list.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    drawer.classList.remove("open-drawer");
    navBar.classList.remove("nav-bar-black");
    menuOpen = false;
  });
});

const darkmode = () => {
  docBody.classList.toggle("theme-light");
  docBody.classList.toggle("theme-dark");
};

darkModeButton.addEventListener("click", darkmode);
darkModeButton.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    this.checked = !this.checked;
    darkmode();
  }
});
