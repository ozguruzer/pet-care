var navList = document.getElementById("nav-lists");

var body = body;

function Show() {
  navList.classList.add("_Menus-show");

}

function Hide() {
  navList.classList.remove("_Menus-show");

}


var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});