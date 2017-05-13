module.exports = {
    set: function (key, value) {
        localStorage[key]=value
    },
    get: function (key) {
        return localStorage[key]
    }
}