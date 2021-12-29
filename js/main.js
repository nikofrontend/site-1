$(function () {


    $(" .header__menu-link, .header__logo").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });


    $('.programs__items').slick({
        slidesToShow: 3,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><svg width="19" height="33" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d = "M18.5 5.25L7.25 16.5L18.5 27.75L16.25 32.25L0.499999 16.5L16.25 0.75L18.5 5.25Z"fill ="black"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d = "M13.5 33.75L24.75 22.5L13.5 11.25L15.75 6.75L31.5 22.5L15.75 38.25L13.5 33.75Z"fill ="black"></svg></button>',
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 340,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    variableWidth: true,
                }
            }
        ]
    });


    $('.menu__btn,  .header__menu a').on('click', function () {
        $('.header__menu').toggleClass('header__menu--active');
        $('.menu__btn').toggleClass('menu__btn--active');
        $('body').toggleClass('lock-scroll');
    });


});