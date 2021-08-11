// // Reference: https://codepen.io/Azametzin/pen/NBZaby

// var gear1 = document.querySelector(".gear1").style;
// gear2 = document.querySelector(".gear2").style;
// window.onscroll = function rotateGear() {
//   gear1.transform = "rotate(" + window.scrollY * 2.5 + "deg)";
//   gear2.transform = "rotate(-" + window.scrollY * 2.5 + "deg)";
// };

const menuBtn = document.querySelector(".menu-btn");
const drawer = document.querySelector(".drawer-container");
const navBar = document.querySelector(".nav-bar");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    drawer.classList.add("open-drawer");
    navBar.classList.add("nav-bar-black");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    drawer.classList.remove("open-drawer");
    navBar.classList.remove("nav-bar-black");
    menuOpen = false;
  }
});

const drawerList = document.querySelectorAll(".drawer li");

drawerList.forEach((list) => {
  list.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    drawer.classList.remove("open-drawer");
    navBar.classList.remove("nav-bar-black");
    menuOpen = false;
  });
});
