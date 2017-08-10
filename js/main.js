// Start slick on the header carousel
$(document).ready(function () {
    $('.header-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        centerMode: false,
        arrows: false,
        prevArrow: "",
        nextArrow: "<a>></a>",
        fade: true,
        autoplay: true,
        asNavFor: '.slider-nav'
    });
});

$('.slider-nav').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.header-carousel',
    dots: false,
    centerMode: true,
    focusOnSelect: true
});