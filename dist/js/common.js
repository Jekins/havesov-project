/*! StartProject 25-02-2018 | Project base: Jekins.ru */
/* header ***********************/
$(function () {
    $(document).on('click', '.header__search-link, .header__search-close', function () {
        $(document).toggleSearch();
        return false;
    });
    $(document).on('click', '.header__menu-link, .header__menu-close', function () {
        $(document).toggleMenu();
        return false;
    });
    $('.header__menu-close, .header__nav nav').offScroll();
});

$.fn.toggleSearch = function () {
    var b = '.header',
        searchInner = b + '__search-inner',
        active = (searchInner + '_active').replace('.','');

    if ($(searchInner).hasClass(active)) {
        $(searchInner).stop().removeClass(active);
    } else {
        $(searchInner).stop().addClass(active);
        setTimeout(function () {
            $(searchInner).find('input').focus();
        }, 300);
    }
};

$.fn.toggleMenu = function () {
    var b = '.header',
        nav = b + '__nav',
        innerNav = nav + ' nav',
        active = (nav + '_active').replace('.','');

    if ($(nav).hasClass(active)) {
        $(nav).stop().removeClass(active);
        // document.body.style.overflow = '';
    } else {
        $(nav).stop().addClass(active);
        // document.body.style.overflow = 'hidden';
    }
};
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
/* off-scroll ***********************/
$.fn.offScroll = function () {
    var _overlay = this;
    var _clientY = null;
    for (i = 0; i < _overlay.length; i++) {
        _overlay[i].addEventListener('touchstart', function (event) {
            if (event.targetTouches.length === 1) {
                _clientY = event.targetTouches[0].clientY;
            }
        }, false);
        _overlay[i].addEventListener('touchmove', function (event) {
            if (event.targetTouches.length === 1) {
                disableRubberBand(event, this);
            }
        }, false);
    }
    function disableRubberBand(event, el) {
        var clientY = event.targetTouches[0].clientY - _clientY;
        if (el.scrollTop === 0 && clientY > 0) {
            event.preventDefault();
        }
        if (isOverlayTotallyScrolled(el) && clientY < 0) {
            event.preventDefault();
        }
    }

    function isOverlayTotallyScrolled(el) {
        return el.scrollHeight - el.scrollTop <= el.clientHeight;
    }
};
/* common ***********************/