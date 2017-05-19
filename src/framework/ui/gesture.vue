<template>
    <div class="gesture">
        <slot></slot>
    </div>
</template>

<script>

// 触摸手势组件
// tap:点击
// Press:长按
// swipeLeft:向左滑动
// swipeRight:向右滑动
// 用法说明：
//    <gesture :tap="handleTap" :swipeLeft="handleSwipeLeft">...</gesture>
// tap为接收到的事件处理函数

import Hammer from 'hammerjs'

export default {
    name: 'gesture',
    props: {
        options: {
            type: Object,
            default: function () {
                return {

                }
            }
        },

        tap: {
            type: Function
        },

        press: {
            type: Function
        },

        swipeLeft: {
            type: Function
        },

        swipeRight: {
            type: Function
        }


    },
    //组件挂载时
    mounted() {

        var h = new Hammer(this.$el)

        //设置长按时间为500毫秒
        h.get('press').set({ time: 500 })

        //设置每毫秒像素移动触发滑动时间
        h.get('swipe').set({ velocity: .3 })

        var handle = this

        //处理从右向左滑动
        h.on('swipeleft', function (ev) {

            if(typeof(handle.swipeLeft)!='undefined')
            handle.swipeLeft(ev)
        })

        //处理从左向右滑动
        h.on('swiperight', function (ev) {
             if(typeof(handle.swipeRight)!='undefined')
            handle.swipeRight(ev)
        })


        //处理长按滑动
        h.on('press', function (ev) {
             if(typeof(handle.press)!='undefined')
            handle.press(ev)
        })

    }

}
</script>

<style scoped>
.gesture {
    width: 100%;
    height: 100%;
}
</style>



