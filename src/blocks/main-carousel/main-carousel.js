/* main-carousel ***********************/
$(function () {
    $(document).mainCarouselInit();
});

$.fn.mainCarouselInit = function () {
    var b = '.main-carousel',
        carousel = b + '__carousel',
        left = b + '__left',
        right = b + '__right',
        swiper = new Swiper(carousel, {
            navigation: {
                nextEl: right,
                prevEl: left,
            }
        });
};