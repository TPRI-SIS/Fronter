//浏览器geo实现
module.exports = {
    getPosition: function (successCallBack, errorCallBack) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack,{
          // 指示浏览器获取高精度的位置，默认为false
          enableHighAccuracy: true,
          // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
          timeout: 5000,
          // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
          maximumAge: 3000
        });
      }else{
        alert("Your browser does not support Geolocation!");
      }
    }
}
