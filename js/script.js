
// --------------translation------------
  const translations = {
      en: {
        FutureBusiness: "Future Business ",

        home: "Home",
        about: "About Us",
        services: "Our Services",
        clients: "Clients",
        works: "Works",
        contact: "Contact Us",
        scrollDown: "Scroll Down",
        FutureBusiness: "Future Business",
        Exhibition: "Exhibition &",
        EventManagement: "Event Management",
        aboutInfo: "sit amet consectetur adipisicing elit. Voluptate laborum recusandae nobis provident excepturi minima? Assumenda fugiat neque, consectetur voluptates eligendi doloremque sit mollitia dolore architecto molestias, soluta, et ullam",
        All: "All",
        ExhibitionBooth: "Exhibition & Booth",
        Events: "Events",
        screensoundsystem: "Screen & Sound System",
        Hospitality: "Hospitality & Protocol Management",
        Private: "Private & Official Events Organization",
        service: "New service",
        detailsservice: "details of the service",
        ExhibitionsConferencesManagement: "Exhibitions and Conferences Management",
        Fullservice: "Full-service exhibition and conference management including planning, coordination, and execution of all aspects of your event.",
        Pavilions: "Pavilions & Booths Design and Implementation",
        Technical: "Technical & Interactive Equipment",
        EventMarketing: "Event Marketing & Promotion",
        EMail: "E-Mail",
        phone: "phone",
        address: "address enAlyasmeen, King-Abdulaziz Road, Riyadh KSA",
        yourname:"your Name",
        topic:"your Topic",
        message:"Message",
        submit:"Submit",


      },
      ar: {
        FutureBusiness: "مستقبل الأعمال",

        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        clients: "عملاؤنا",
        works: "أعمالنا",
        contact: "اتصل بنا",
        scrollDown: "مرر لأسفل",
        FutureBusiness: "مستقبل الأعمال",
        Exhibition: "و الفاعليات",
        EventManagement: "إدارة المعارض",
        aboutInfo:" تقع في عداد النخبة. هل ترغب في العمل بشكل متكرر باستثناء الحد الأدنى من الادخار؟ بافتراض أن هناك بعض الهاربين، فإن المنشئ يتطور بشكل أنيق من الألم الذي يسببه الاضطراب المعماري والحل والعلم.",
        All: "الكل",
        ExhibitionBooth: "معرض و جناح",
        Events: "أحداث", 
        screensoundsystem: "شاشة و نظام صوت",
        Hospitality: "إدارة الضيافة والبروتوكول",
        Private:"تنظيم المناسبات الخاصة والرسمية", 
        service: "خدمة جديدة",
        detailsservice: "تفاصيل الخدمة",
        ExhibitionsConferencesManagement: "إدارة المعارض و المؤتمرات",
        Fullservice: " إدارة المعارض و المؤتمرات كاملة الخدمات بما في ذلك التخطيط والتنسيق وتنفيذ جميع جوانب الحدث الخاص بك",
        Pavilions:"تصميم وتنفيذ الأجنحة والمقصورات",
        Technical:"المعدات التقنية والتفاعلية",
        EventMarketing:"التسويق والترويج للحدث",
        
        EMail: "البريد الإلكتروني",
        phone: "الهاتف",
        address: "الياسمين، طريق الملك عبد العزيز، الرياض، المملكة العربية السعودية",
        yourname:"الإسم",
        topic:"الموضوع",
        message:"الرسالة",
        submit:"إرسال",
            
      
      }
    };

    function setLanguage(lang) {
      document.documentElement.lang = lang;
      const elements = document.querySelectorAll("[data-translate]");
      elements.forEach(el => {
        const key = el.getAttribute("data-translate");
        el.textContent = translations[lang][key];
      });
    }

    setLanguage("en");







  window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});



const showWheelBtn = document.getElementById("showWheel");
const wheelContainer = document.getElementById("wheelContainer");
const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const closeWheel = document.getElementById("closeWheel");


let spinning = false; 

showWheelBtn.addEventListener("click", () => {
  let lastTry = localStorage.getItem("lastLuckTry");
  if (!lastTry || checkMonthPassed(lastTry) ) {
    wheelContainer.style.display = "flex";
  } 
  else {
    document.getElementById("tryAgainModal").style.display = "flex";
    // alert("😅 جرب حظك الشهر الجاي!");
  }
});
document.getElementById("closeTryAgain").addEventListener("click", () => {
  document.getElementById("tryAgainModal").style.display = "none";
});
document.getElementById("okTryAgain").addEventListener("click", () => {
  document.getElementById("tryAgainModal").style.display = "none";
});

closeWheel.addEventListener("click", () => {
  wheelContainer.style.display = "none";
});

spinBtn.addEventListener("click", () => {
  if (spinning) return; 
  spinning = true;

  let deg = 2000 + Math.floor(Math.random() * 2000);
  wheel.style.transform = `rotate(${deg}deg)`;

  setTimeout(() => {
    const prize = getPrize(deg);
    document.getElementById("prizeText").textContent = prize;
    document.getElementById("prizeModal").style.display = "flex";
    
    // alert("🎉 مبروك! دي جائزتك: " + prize);
    localStorage.setItem("lastLuckTry", new Date().toISOString());
    spinning = false;
    wheelContainer.style.display = "none";
  }, 5000);
});
document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("prizeModal").style.display = "none";
});
document.getElementById("okBtn").addEventListener("click", () => {
  document.getElementById("prizeModal").style.display = "none";
});

function getPrize(deg) {
  const normalized = deg % 360;
  const slice = 60;
  if (normalized < slice) return "خصم 10%";
  if (normalized < slice * 2) return "كوبون 50ج";
  if (normalized < slice * 3) return "منتج مجاني";
  if (normalized < slice * 4) return "خصم 20%";
  if (normalized < slice * 5) return "كوبون 100ج";
  return "شكراً لمشاركتك";
}


function checkMonthPassed(lastTry) {
  let lastDate = new Date(lastTry);
  let now = new Date();
  let diffMonths =
    (now.getFullYear() - lastDate.getFullYear()) * 12 +
    (now.getMonth() - lastDate.getMonth());
  return diffMonths >= 1;
}






var swiper = new Swiper(".myProductsSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  grabCursor: 'true',
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});


  
  document.querySelectorAll(".myCategorySwiper").forEach((swiperEl) => {
  new Swiper(swiperEl, {
  slidesPerView: 3,
  spaceBetween: 20,
  grabCursor: 'true',
  allowTouchMove: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});
});

// // Global Variables
// let cartCount = 2;
// let currentPage = 'home';




// Show toast notification
function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast show position-fixed top-0 end-0 m-3';
    toast.style.zIndex = '9999';
    toast.innerHTML = `
        <div class="toast-body bg-success text-white rounded">
            <i class="fas fa-check-circle me-2"></i>
            ${message}
        </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Product carousel navigation
function initProductCarousel() {
    let currentIndex = 0;
    const products = document.querySelectorAll('.product-carousel .product-card');
    const totalProducts = products.length;
    const visibleProducts = 4; // Desktop view
    
    function showProducts(startIndex) {
        products.forEach((product, index) => {
            if (index >= startIndex && index < startIndex + visibleProducts) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
    
    function nextProducts() {
        currentIndex = (currentIndex + 1) >= (totalProducts - visibleProducts + 1) ? 0 : currentIndex + 1;
        showProducts(currentIndex);
    }
    
    function prevProducts() {
        currentIndex = currentIndex <= 0 ? Math.max(0, totalProducts - visibleProducts) : currentIndex - 1;
        showProducts(currentIndex);
    }
    
    // Bind navigation buttons
    const nextBtn = document.querySelector('.product-next-btn');
    const prevBtn = document.querySelector('.product-prev-btn');
    
    if (nextBtn) nextBtn.addEventListener('click', nextProducts);
    if (prevBtn) prevBtn.addEventListener('click', prevProducts);
    
    // Initial display
    showProducts(currentIndex);
}

// Testimonial carousel
function initTestimonialCarousel() {
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-item');
    const totalTestimonials = testimonials.length;
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }
    
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }
    
    function prevTestimonial() {
        currentTestimonial = currentTestimonial <= 0 ? totalTestimonials - 1 : currentTestimonial - 1;
        showTestimonial(currentTestimonial);
    }
    
    // Bind navigation buttons
    const nextBtn = document.querySelector('.testimonial-next-btn');
    const prevBtn = document.querySelector('.testimonial-prev-btn');
    
    if (nextBtn) nextBtn.addEventListener('click', nextTestimonial);
    if (prevBtn) prevBtn.addEventListener('click', prevTestimonial);
    
    // Auto-rotate testimonials
    setInterval(nextTestimonial, 5000);
    
    // Initial display
    showTestimonial(currentTestimonial);
}





// Image lazy loading
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavbarScroll();
    initProductCarousel();
    initTestimonialCarousel();
    initLuckyWheel();
    initSearch();
    initNavigation();
    initMobileMenu();
    initSmoothScroll();
    initLazyLoading();
    updateCartBadge(cartCount);
    
    console.log('موقع تم تحميله بنجاح');
});

// Utility function to format currency
function formatCurrency(amount) {
    return `${amount} ر.س`;
}

// Utility function to format rating stars
function generateStars(rating, maxRating = 5) {
    let stars = '';
    for (let i = 1; i <= maxRating; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star text-warning"></i>';
        } else {
            stars += '<i class="far fa-star text-muted"></i>';
        }
    }
    return stars;
}



/**
* Template Name: Company
* Template URL: https://bootstrapmade.com/company-free-html-bootstrap-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Auto generate the carousel indicators
   */
  document.querySelectorAll('.carousel-indicators').forEach((carouselIndicator) => {
    carouselIndicator.closest('.carousel').querySelectorAll('.carousel-item').forEach((carouselItem, index) => {
      if (index === 0) {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}" class="active"></li>`;
      } else {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}"></li>`;
      }
    });
  });
});




// Scroll Reveal
window.addEventListener('scroll', () => {
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});

// Navbar Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNavbar');
    
    if (window.scrollY > 100) {  
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });



   // swiper 
   var swiper = new Swiper(".myFamousSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,   
    loop: true,         
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    }
  });



    AOS.init({
    duration: 1000,
    loop: true      
  });
    // profile modal name
    var profileModal = document.getElementById('profileModal')
    profileModal.addEventListener('show.bs.modal', function (event) {
      var button = event.relatedTarget
      var name = button.getAttribute('data-name') || 'شخص'
      document.getElementById('modalName').textContent = name
      document.getElementById('modalBio').textContent = 'بطاقة تعريف قصيرة لـ ' + name + ' — يمكنك إضافة تواريخ، صور ومستندات.'
    })

    // phonebook search
    document.getElementById('phoneSearch').addEventListener('input', function(e){
      var q = e.target.value.trim();
      document.querySelectorAll('#phoneRows tr').forEach(tr=>{ tr.style.display = tr.innerText.includes(q) ? '' : 'none' })
    })

    // contact form (mock)
    document.getElementById('contactForm').addEventListener('submit', function(e){
      e.preventDefault();
      alert('تم إرسال الرسالة — شكرًا!')
      this.reset();
    })


      const observers = document.querySelectorAll(".animate");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("show");
          });
        },
        { threshold: 0.2 }
      );
      observers.forEach((el) => io.observe(el));

      // Animation on scroll
      const elements = document.querySelectorAll(".animate");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 }
      );

      elements.forEach((el) => observer.observe(el));


      document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.reveal-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 }); 

  sections.forEach(section => observer.observe(section));
});

// tree
 $(function () {
    $('#family-tree').jstree({
      'core': {
        'data': [
          {
            "text": "الجد",
            "children": [
              {
                "text": "الأب",
                "children": [
                  { "text": "الابن الأكبر" },
                  { "text": "الابنة الصغرى" }
                ]
              },
              { "text": "العم" }
            ]
          }
        ]
      }
    });
  });
