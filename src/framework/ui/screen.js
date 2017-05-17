export default {
    width: document.body.offsetWidth,
    height: document.body.offsetHeight,
    isPhone: function () {
        return window.innerWidth <= 480
    },
    isPad: function () {
        return window.innerWidth > 480 && window.innerWidth <= 993
    },
    isPC: function () {
        return window.innerWidth > 993
    }


}