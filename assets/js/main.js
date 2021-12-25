(function($) {
  "use strict";
  

  // owlCarousel
  $(".feedback_wrp").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: true
  });



  function postsCarousel() {
    var checkWidth = $(window).width();
    var owlPost = $(".service_wrp");
    if (checkWidth > 767) {
      if (typeof owlPost.data('owl.carousel') != 'undefined') {
        owlPost.data('owl.carousel').destroy();
      }
      owlPost.removeClass('owl-carousel');
    } else if (checkWidth < 768) {
      owlPost.addClass('owl-carousel');
      owlPost.owlCarousel({
        items: 1,
        slideSpeed: 500,
        animateOut: 'fadeOut',
        touchDrag: true,
        mouseDrag: false,
        autoplay: true,
        dots: true,
        navText: [
          '<img src="assets/img/left.png" alt="">',
          '<img src="assets/img/right.png" alt="">'
        ],
        nav: true,
        loop: true
      });
    }
  }


  
  postsCarousel();
  $(window).resize(postsCarousel);

  function postsCarousel2() {
    var checkWidth = $(window).width();
    var owlPost = $(".Pimple_slider");
    if (checkWidth > 767) {
      if (typeof owlPost.data('owl.carousel') != 'undefined') {
        owlPost.data('owl.carousel').destroy();
      }
      owlPost.removeClass('owl-carousel');
    } else if (checkWidth < 768) {
      owlPost.addClass('owl-carousel');
      owlPost.owlCarousel({
        items: 1,
        slideSpeed: 500,
        animateOut: 'fadeOut',
        touchDrag: true,
        mouseDrag: false,
        autoplay: true,
        dots: true,
        navText: [
          '<img src="assets/img/left.png" alt="">',
          '<img src="assets/img/right.png" alt="">'
        ],
        nav: true,
        loop: true
      });
    }
  }
  postsCarousel2();
  $(window).resize(postsCarousel);

})(jQuery);
