/* movies-list ***********************/
$(function () {
    $(document).moviesListCarouselInit();
});

$.fn.moviesListCarouselInit = function () {
    var b = '.movies-list',
        carousel = b + '__carousel',
        left = b + '__left',
        right = b + '__right',
        wide = 4,
        narrow = 5;

    console.log($(window).width() < 992 && $(window).width() > 768);
    if ($(window).width() <= 992 && $(window).width() > 768) {
        wide = 3;
        narrow = 4;
    } else if ($(window).width() > 600 && $(window).width() <= 768) {
        wide = 2;
        narrow = 3;
    } else if ($(window).width() <= 600) {
        wide = 1;
        narrow = 2;
    }

    $(carousel).each(function () {
        new Swiper($(this)[0], {
            slidesPerView: $(this).closest(b).hasClass((b + '_films').replace('.','')) ? narrow : wide,
            navigation: {
                nextEl: $(this).closest(b).find(right)[0],
                prevEl: $(this).closest(b).find(left)[0]
            }
        });
    });
};