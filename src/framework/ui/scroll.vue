<template>
  <div class="wrapper" :style="{overflowX:overflowX,overflowY:overflowY}">
    <div v-bind:style="{width:width,height:height}">
      <slot></slot>
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

  import IScroll from 'iscroll'


  var option = {
    mouseWheel: true,
    click: true,
    preventDefault: false,
    tap: true,
    bounce: true,
    disableTouch: false,
    checkDOMChanges: true
  }

  export default {
    name: 'scroll',
    data() {
      return {
        overflowX: '',
        overflowY: '',
        scroll:null
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
      }
    },
    updated(){
      this.scroll.refresh()
    },

    watch: {
      width: {
        handler(width) {
          var inner = $(this.$el).children().children()
          inner.css('width', width )
        }
      },
      height: {
        handler(height) {
          var inner = $(this.$el).children().children()
          inner.css('height', height)
        }
      }
    },

    mounted() {
      option.scrollX = this.options.scrollX
      option.scrollY = this.options.scrollY
      if (!$screen.isPC()) {

          this.scroll = new IScroll(this.$el, option)


        this.overflowX = 'hidden'
        this.overflowY = 'hidden'
      }
      else {
        this.overflowX = o.scrollX ? 'visible' : 'hidden'
        this.overflowY = o.scrollY ? 'visible' : 'hidden'

        console.log(this.scrollX + '  ' + this.scrollY)
      }


    },
    destroyed() {
      if (!$screen.isPC())
        this.scroll.destroy()
    }
  }
</script>

<style scoped>

</style>



