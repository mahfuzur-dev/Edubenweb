$(window).scroll(function() {
    var sticky = $(this).scrollTop()
    if (sticky > 300) {
        $('.navbar').addClass('stickymenu')
    } else {
        $('.navbar').removeClass('stickymenu')
    }
})
$('.counter').counterUp({
    delay: 10,
    time: 1500
});

$('.slick_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    autoplaySpeed: 2000,
});

//==== Back-to-top button
$(window).on('scroll', function(event) {
    if ($(this).scrollTop() > 600) {
        $('.top-to-bottom').fadeIn(200)
    } else {
        $('.top-to-bottom').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.top-to-bottom').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1500);
});