var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });


  $('.js-gotop').on('click', function(e){				
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('html').offset().top
        }, 700);
        return false;
    });

$(window).scroll(function(){
    var $win = $(window);
    if ($win.scrollTop() > 500) {
        $('.js-top').addClass('active');
    } else {
        $('.js-top').removeClass('active');
    }
});