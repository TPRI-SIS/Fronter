<template>
    <div class="scroll">
        <slot></slot>
    </div>
</template>

<script>
// 滚动组件
// options:配置选项
// {
//     mouseWheel: true,是否支持鼠标滚轮
//     click: true,是否支持鼠标点击
//     preventDefault: true,是否阻断事件冒泡
//     tap: false,是否支持点击手势
//     bounce: true,是否有回弹效果
//     disableTouch: false,是否启用touch
//     scrollX: true,横向滚动开关
//     scrollY: false竖向滚动开关
// }

// 用法：
//    <scroll :options="contentOptions">...</scroll>
// tap为接收到的事件处理函数

import IScroll from 'iscroll'

var scroll;

export default {
    name: 'scroll',
    props: {
        options: {
            type: Object,
            default: function () {
                return {
                    mouseWheel: true,
                    click: true,
                    preventDefault: true,
                    tap: false,
                    bounce: true,
                    disableTouch: false,
                    scrollX: true,
                    scrollY: false
                }
            }
        }
    },

    mounted() {
        scroll = new IScroll(this.$el, this.options)
    },
    destroyed() {
        scroll.destroy()
    }
}
</script>

<style scoped>
.scroll {
    z-index: -1;
    overflow: hidden;
}
</style>



