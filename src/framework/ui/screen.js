export default {
    width: document.body.offsetWidth,
    height: document.body.offsetHeight,
    isPhone: function () {
        if (!this.isPC())
            return window.innerWidth <= 480
        else
            return false
    },
    isPad: function () {
        if (!this.isPC())
            return window.innerWidth > 480 && window.innerWidth <= 993
        else
            return false
    },
    isPC: function () {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return false;
    }
}