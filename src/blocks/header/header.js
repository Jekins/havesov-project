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