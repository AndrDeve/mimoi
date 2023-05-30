//slider
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor:true,
    loop:true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    centeredSlides:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//lo más vendido
var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 3,
  spaceBetween: 55,
  autoplay:{
    delay:3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 60
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    500: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
