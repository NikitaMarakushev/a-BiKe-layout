if($('.slider__body').length>0){
    $('.slider__body').slick({
        arrows: false,
        dots: true,
        accessibility: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        autoplaySpeed: 3800,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {}
        }]
    });
}