// // Reference: https://codepen.io/Azametzin/pen/NBZaby

// var gear1 = document.querySelector(".gear1").style;
// gear2 = document.querySelector(".gear2").style;
// window.onscroll = function rotateGear() {
//   gear1.transform = "rotate(" + window.scrollY * 2.5 + "deg)";
//   gear2.transform = "rotate(-" + window.scrollY * 2.5 + "deg)";
// };

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
