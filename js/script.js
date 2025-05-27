$(document).ready(function () {
  // Toggle menu icon and header
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  // Scroll events
  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(this).scrollTop() > 0) {
      $('.top').fadeIn(); // Smooth appearance
    } else {
      $('.top').fadeOut(); // Smooth hide
    }
  });

  // Smooth scrolling
  $('a[href^="#"]').on('click', function (e) {
    const target = $(this.hash);

    if (target.length) {
      e.preventDefault();
      $('html, body').animate(
        {
          scrollTop: target.offset().top,
        },
        500,
        'linear'
      );
    }
  });

  // Owl Carousel init
  $('.owl-carousel').owlCarousel({
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
