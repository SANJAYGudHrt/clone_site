var btn = $('#back-to-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});

/* ---------------------------------------------
 Height 100%
 --------------------------------------------- */
(function($) {
    $(".js-height-full").height($(window).height());
    $(".js-height-parent").each(function() {
        $(this).height($(this).parent().first().height());
    });
})(jQuery);

$('.owl-feature').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2.5
        },
        1000: {
            items: 3.5
        }
    }
})

$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $(".js-transparent").removeClass("transparent");
        $(".top_header").addClass("small-height");
    } else {
        $(".js-transparent").addClass("transparent");
        $(".top_header").removeClass("small-height");
    }
});

$('.owl-testimonial').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})




$('.owl-tabs').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    merge: true,
    autoWidth: true,
    responsive: {
        0: {
            items: 2,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})