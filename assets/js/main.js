

/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},

//responsive breakpoint
breakpoints: {
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1400: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
},
});

