import config from './config'

export default {
    ajax: function (params, successCallBack, errorCallBack) {
        var type=config.ajax;
        var ajax = require('../apiImplement/'+type+'/ajax')
        ajax.ajax(null, successCallBack, errorCallBack)
    },
    ajaxGroup: function (paramsArray, successCallBack, errorCallBack) {

    }
}