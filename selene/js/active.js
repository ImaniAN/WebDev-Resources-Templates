(function ($) {
    'use strict';

    // [ js Active Code Index ]

    // :: 1.0 Owl Carousel Active Code
    // :: 2.0 Search Form Active Code
    // :: 3.0 Progress Bar Active Code
    // :: 4.0 ScrollUp Active Code
    // :: 5.0 ScrollDown Active Code
    // :: 6.0 CounterUp Active Code
    // :: 7.0 Sticky Active Code
    // :: 8.0 Preloader Active code

    // :: 1.0 Owl Carousel Active Code
    if ($.fn.owlCarousel) {
        $(".about-apps-slider").owlCarousel({
            items: 3,
            loop: true,
            autoplay: false,
            smartSpeed: 500,
            margin: 35,
            center: true,
            dots: true,
            responsive: {
                0: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    // :: 2.0 Search Form Active Code
    $(".search-btn, .remove-btn").on('click', function () {
        $(".search-form-area").toggleClass("search-form-open");
    });

    // :: 3.0 Progress Bar Active Code
    if ($.fn.barfiller) {
        $('#bar1').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#ff4c8b',
            animateOnResize: true
        });
        $('#bar2').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#ff4c8b',
            animateOnResize: true
        });
        $('#bar3').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#ff4c8b',
            animateOnResize: true
        });
        $('#bar4').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#ff4c8b',
            animateOnResize: true
        });
    }

    // :: 4.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    // :: 5.0 ScrollDown Active Code
    $(".scrollDown").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1500);
    });

    // :: 6.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    $('a[href="#"]').click(function ($) {
        $.preventDefault()
    });

    var $window = $(window);

    if ($window.width() > 767) {
        new WOW().init();
    }

    // :: 7.0 Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 48) {
            $('.header_area').addClass('sticky slideInDown');
        } else {
            $('.header_area').removeClass('sticky slideInDown');
        }
    });

    // :: 8.0 Preloader Active code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);