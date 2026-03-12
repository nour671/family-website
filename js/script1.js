// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  document.getElementById('mainNavbar').classList.toggle('scrolled', window.scrollY > 100);
});

// AOS Init
AOS.init({
  duration: 1000,
  once: true
});

// Swiper 
// document.addEventListener("DOMContentLoaded", function() {
//   new Swiper(".myFamousSwiper", {
//     slidesPerView: 1,
//     spaceBetween: 20,
    
//     loop: true,
//     autoplay: { delay: 4000 },
//     breakpoints: {
//       768: { slidesPerView: 2 },
//       992: { slidesPerView: 3 }
//     }
//   });
// });


document.addEventListener("DOMContentLoaded", function() {
  new Swiper(".myFamousSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,                    
    autoplay: {
      delay: 4000,
      disableOnInteraction: false   
    },

   
    grabCursor: true,             
    touchRatio: 1,                
    simulateTouch: true,          
    allowTouchMove: true,        

    breakpoints: {
      768: { 
        slidesPerView: 2,
        // spaceBetween: 30
      },
      992: { 
        slidesPerView: 3,
        // spaceBetween: 40
      }
    },

    
    // speed: 800,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true
    // },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev"
    // }
  });
});