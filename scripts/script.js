// // Reference: https://codepen.io/Azametzin/pen/NBZaby

// var gear1 = document.querySelector(".gear1").style;
// gear2 = document.querySelector(".gear2").style;
// window.onscroll = function rotateGear() {
//   gear1.transform = "rotate(" + window.scrollY * 2.5 + "deg)";
//   gear2.transform = "rotate(-" + window.scrollY * 2.5 + "deg)";
// };

const menuBtn = document.querySelector(".menu-btn");
const drawerList = document.querySelectorAll(".drawer li");
const drawer = document.querySelector(".drawer-container");
const navBar = document.querySelector(".nav-bar");
const docBody = document.querySelector("body");
const darkModeButton = document.querySelector("#myonoffswitch");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    drawer.classList.add("open-drawer");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    drawer.classList.remove("open-drawer");
    menuOpen = false;
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

darkModeButton.addEventListener("click", () => {
  docBody.classList.toggle("theme-light");
  docBody.classList.toggle("theme-dark");
});
