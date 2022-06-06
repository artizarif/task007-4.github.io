let navbar = document.querySelector('.popular-page');
let menuBtn = document.getElementById('popular');
let close = document.getElementById('fa-times') 

menuBtn.onclick = function(){
    navbar.classList.toggle('active');
};

close.onclick = function(){
    navbar.classList.remove('active');
};

let pricepage = document.querySelector('.price-page');
let menuBtn2 = document.getElementById('price');
let close2 = document.getElementById('fa-times-2') 

menuBtn2.onclick = function(){
    pricepage.classList.toggle('active');
};

close2.onclick = function(){
    pricepage.classList.remove('active');
};

// 

// let loadMoreBtn = document.querySelector('#load-more');
// let currentItem = 3;

// loadMoreBtn.onclick = () =>{
//   let boxes = [...document.querySelectorAll('.page .card')];
//   for (var i = currentItem; i < currentItem+3; i++){
//     boxes[i].style.display = 'inline-block';
//   }
//   currentItem += 3;
// }


// 

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
        slidesPerView: 2,
      },
      441: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    }
});

var swiper = new Swiper(".card-slider-2", {
    grabCursor: true,
    loop: true,
    // centeredSlides:true,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      441: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
    }
});

var swiper = new Swiper(".filter-card-slider", {
  grabCursor: true,
  // loop: true,
  // centeredSlides:true,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 3.5,
    },
    441: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  }
});


let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
  let boxes = [...document.querySelectorAll('.page .card')];
  for (var i = currentItem; i < currentItem+3; i++){
    boxes[i].style.display = 'inline-block';
  }
  currentItem += 3;

  if(currentItem >= boxes.length){
    loadMoreBtn.style.display = 'none';
  }

}