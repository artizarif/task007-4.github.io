var swiper = new Swiper(".card-slider", {
    grabCursor: true,
    loop: true,
    // centeredSlides:true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      441: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    }
});

// javascript for card-2


var swiper = new Swiper(".card-slider-2", {
  grabCursor: true,
  // loop: true,
  // centeredSlides:true,
  spaceBetween: 4,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2.5,
    },
    441: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
  }
});

var swiper = new Swiper(".terms-slider", {
  grabCursor: true,
  // loop: true,
  // centeredSlides:true,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
    },
    441: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
  }
});