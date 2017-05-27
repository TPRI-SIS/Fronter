//浏览器ajax实现

module.exports = {
  ajax: function (params, successCallBack, errorCallBack) {
    ///var axios = require('axios')
    if (params.method == 'get') {
      $.get(params.url)
        .done(
          r => {
            successCallBack(r)
          })
        .fail(
          e => {
            errorCallBack(e)
          }
        )
    }
    else {
      $.post(params.url,params.param)
        .done(
          r => {
            successCallBack(r)
          })
        .fail(
          e => {
            errorCallBack(e)
          }
        )
    }
  }
}
