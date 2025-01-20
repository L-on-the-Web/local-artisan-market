//hamburger menu selectons
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".navigation");
const navLink = document.querySelectorAll(".nav-link");

//resize logo on scroll
window.addEventListener("scroll", (e) => {
   let logo = document.querySelector("#logo");
   let scroll = this.scrollY;

   if (scroll > 1) {
      logo.classList.add("resize");
   } else {
      logo.classList.remove("resize");
   }
})

//hamburger menu functionality
hamburger.addEventListener("click", openMenu);

function openMenu() {
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active");
}

//close menu on nav menu clicks
navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
   hamburger.classList.remove("active");
   navMenu.classList.remove("active");
}