//浏览器ajax实现

module.exports = {
  ajax: function (params, successCallBack, errorCallBack) {
    var axios = require('axios')

    if (params.method == 'get') {
      axios.get(params.url)
        .then(
          r => {
            console.log(r)
            successCallBack(r)
          })
        .catch(
          e => {
            console.log(e)
            errorCallBack(e)
          }
        )
    }
    else {

      axios.post(params.url,params.param)
        .then(
          r => {
            console.log(r)
            successCallBack(r)
          })
        .catch(
          e => {
            console.log(e)
            errorCallBack(e)
          }
        )
    }
  }
}
