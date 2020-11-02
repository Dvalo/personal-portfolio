$(window).scroll(function() {    
    let scroll = $(window).scrollTop();

    if (scroll >= 1) {
        $("#navbar").addClass("shrink");
    } else {
        $("#navbar").removeClass("shrink");
    }
    if(scroll >= 300) {
        $(".mouse-scroll").fadeOut();
    } else {
        $(".mouse-scroll").fadeIn();
    }
});
  
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});