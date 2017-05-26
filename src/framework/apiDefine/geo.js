/**
 * Created by liupengfei on 2017/5/25.
 */
import config from './config'

export default {
  getPosition: function (successCallBack, errorCallBack) {
    var type=config.geo;
    var geo = require('../apiImplement/'+type+'/geo')
    geo.getPosition(successCallBack, errorCallBack)
  }
}
