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