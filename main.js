
$(document).ready(function() {
  $('.fa-bars').click(function() {
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');

  });

  $(window).on('scroll load', function() {
      // Check scroll position and toggle classes accordingly
      var scrollPosition = $(window).scrollTop();
      if (scrollPosition > 30) {
          $('header').addClass('header-active');
      } else {
          $('header').removeClass('header-active');
      }

      // Highlight the active section in the navbar
      $('section').each(function() {
          var windowTop = scrollPosition;
          var id = $(this).attr('id');
          var sectionHeight = $(this).outerHeight();
          var sectionTop = $(this).offset().top - 200;

          if (windowTop >= sectionTop && windowTop < sectionHeight + sectionTop) {
              $('.navbar ul li a').removeClass('active');
              $('.navbar').find('[href="#' + id + '"]').addClass('active');
          }
      });
  });

  

  // Smooth scrolling for anchor links
  $('.navbar ul li a').on('click', function(e) {
      e.preventDefault();
      var targetId = $(this).attr('href');
      var targetPosition = $(targetId).offset().top;

      $('html, body').animate({
          scrollTop: targetPosition
      }, 600);

      // Close the mobile menu after clicking a link
      $('.fa-bars').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  });
});


var swiper = new Swiper(".teachers-slider", {
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    grabCursor: true,

    loop: true,  
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,

        },
      },
});



var swiper = new Swiper(".toppers-slider", {
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    grabCursor: true,

    loop: true,  
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,

        },
      },
});


var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },

  grabCursor: true,

  loop: true,  
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,

      },
    },
});