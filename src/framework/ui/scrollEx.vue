<template>
  <div class="wrapper">

    <div v-bind:style="{width:width,height:height}">
      <slot></slot>
    </div>
    <div class="up">
      <slot name="up"></slot>
    </div>
    <div class="down">
      <slot name="down"></slot>
    </div>

  </div>
</template>

<script>
  // 滚动组件
  // options:配置选项
  // {
  //     scrollX: true,横向滚动开关
  //     scrollY: false竖向滚动开关
  // }
  // height:外框高度
  // width:外框宽度
  // 用法：
  //    <scroll :options="contentOptions" :width="width" :height="height">...</scroll>
  // tap为接收到的事件处理函数


  export default {
    name: 'scrollEx',
    data() {
      return {
        overflowX: '',
        overflowY: '',
        isUp: false,
        isDown: false,
        scroll: null,
        offset:80
      }
    },
    props: {
      options: {
        type: Object,
        default: function () {
          return {
            scrollX: false,
            scrollY: true
          }
        }
      },
      width: {
        type: String
      },
      height: {
        type: String
      },
      upOpenClosed:{
          type:Function
      },
      downOpenClosed:{
        type:Function
      }
    },
    updated(){
      this.scroll.refresh()
    },


    mounted() {
      var option = {
        probeType: 3,
        mouseWheel: true,
        click: true,
        preventDefault: false,
        tap: true,
        bounce: true,
        disableTouch: false,
        scrollX: false,
        scrollY: true
      }

      var vm = this

      require('./iscroll-probe')

      this.scroll = new IScroll(this.$el, option)
      this.scroll.on('scroll',

        function () {
          if (this.y > vm.offset) {
            if (!vm.isUp) {
              $(vm.$el.querySelector('.up')).addClass('upAni')
              vm.isUp = true
            }
          }
          else if (this.y < 20) {
            if (this.y < this.maxScrollY - vm.offset) {
              if (!vm.isDown) {
                $(vm.$el.querySelector('.down')).addClass('downAni')
                vm.isDown = true
              }
            }
            else {
              if (vm.isUp) {
                $(vm.$el.querySelector('.up')).removeClass('upAni')
                vm.isUp = false
                if (typeof (vm.upOpenClosed) != 'undefined')
                    setTimeout(vm.upOpenClosed(),500)

              }
              if (vm.isDown) {
                $(vm.$el.querySelector('.down')).removeClass('downAni')
                vm.isDown = false
                if (typeof (vm.downOpenClosed) != 'undefined')
                  setTimeout(vm.downOpenClosed(),500)
              }
            }

          }
        })


    },
    destroyed() {
      if (!$screen.isPC())
        this.scroll.destroy()
    }
  }
</script>

<style scoped>
  .wrapper {
    overflow: hidden;
  }

  .up {
    width: 100%;
    position: absolute;
    top: 0px;
    /*z-index: -1;*/
    opacity: 0;
  }

  .down {
    width:100%;
    position: absolute;
    bottom: 0px;
    /*z-index: -1;*/
    opacity: 0;
  }

  .upAni {
    transition: all .3s;
  }

  .upAni {
    opacity: 1;
    transform: translateY(20px);
  }

  .downAni {
    transition: all .3s;
  }

  .downAni {
    opacity: 1;
    transform: translateY(-20px);
  }


</style>



