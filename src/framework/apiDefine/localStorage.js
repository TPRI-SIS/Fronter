import config from './config'

export default {
    set: function (key, value) {
        var type = config.localStorage;
        var store = require('../apiImplement/' + type + '/localStorage')
        store.set(key,value)
    },
    get: function (key) {
        var type = config.localStorage;
        console.log(type)
        var store = require('../apiImplement/' + type + '/localStorage')
        return store.get(key)
    }
}