// menu

let overlay = document.getElementById('overlay');
let openMenu = document.getElementById('openMenu');
let mobileMenu = document.querySelector('.mobileMenu');

openMenu.addEventListener('click', function () {
  overlay.classList.add('active');
  mobileMenu.classList.add('active');
})
overlay.addEventListener('click', function () {
  overlay.classList.remove('active');
  mobileMenu.classList.remove('active');
})
// acordion

let acordionBtn = Array.from(document.getElementsByClassName('acordionBtn'));

acordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})
// swiper

const swiper = new Swiper('.sample-slider', {
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, // توقف نشود!
},
  effect: "coverflow",
  loop:true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  spaceBetween: 0,
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
})