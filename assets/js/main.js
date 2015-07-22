$(document).ready(function() {

  ////////// Mobile Nav /////////////

  $('.ion-navicon-round').click(function() {
    $('#nav').toggleClass('showing');
  });

  ///////// Trainer Hovers //////////

  $('.trainer-unit').mouseenter(function() {
    $('.tooltip', this).addClass('animate').fadeIn(300);
  });
  $('.trainer-unit').mouseleave(function() {
    $('.tooltip', this).fadeOut(50);
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
      breakpoint: 990,
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





