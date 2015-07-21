$(document).ready(function() {

  ///////// Trainer Hovers //////////

  $('.trainer-unit').mouseenter(function() {
    $('.tooltip', this).addClass('animate').fadeIn();
  });
  $('.trainer-unit').mouseleave(function() {
    $('.tooltip', this).fadeOut();
  });
  // Icon Hovers //

      // Hover One //
    $('.ion-email').mouseenter(function() {
      $('.tooltip1 p').css('opacity','1');
    });
    $('.ion-email').mouseleave(function() {
      $('.tooltip1 p').css('opacity','0');
    });

      // Hover Two //
    $('.ion-ios-telephone').mouseenter(function() {
      $('.tooltip2 p').css('opacity','1');
    });
    $('.ion-ios-telephone').mouseleave(function() {
      $('.tooltip2 p').css('opacity','0');
    });

      // Hover Three //
    $('.ion-social').mouseenter(function() {
      $('.tooltip3 p').css('opacity','1');
    });
    $('.ion-social-twitter').mouseleave(function() {
      $('.tooltip3 p').css('opacity','0');
    });

	/////// Smooth Scrolling ///////

	smoothScroll();
	
	/////// Navigation Hover ///////

  $('.side-nav li').mouseenter(function() {
    $('a', this).addClass('hover');
    $('.ion-arrow-left-b', this).addClass('hover');
  });
  $('.side-nav li').mouseleave(function() {
    $('a', this).removeClass('hover');
    $('.ion-arrow-left-b', this).removeClass('hover');
  });

	/////// Gallery Carousel ///////

	$('.center').slick({
	  lazyLoad: 'ondemand',
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
    {
      breakpoint: 968,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1
      }
    }
  ]
	});
	$('a.center').featherlightGallery({
    openSpeed: 300
	});
});

function smoothScroll() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
}





