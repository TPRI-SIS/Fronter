<template>
    <div class="wrapper">
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

var scroll;

export default {
    name: 'scroll',
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

    mounted() {
        var o = {
            mouseWheel: true,
            click: true,
            preventDefault: true,
            tap: true,
            bounce: true,
            disableTouch: false,
            scrollX: this.options.scrollX,
            scrollY: this.options.scrollY
        }

        scroll = new IScroll(this.$el, o)
    },
    destroyed() {
        scroll.destroy()
    }
}
</script>

<style scoped>
.wrapper {

    overflow: hidden;
}
</style>



