<template>
    <div class="wrapper">
        <div v-bind:style="{width:width,height:height}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import IScroll from 'iscroll'

var scroll;
var vm;

export default {
    name: 'pageLayout',
    props: {
        width: {
            type: String
        },
        height: {
            type: String
        },
        index: {
            type: Number
        },
        indexChange: {
            type: Function
        }
    },
    watch: {
        index: {
            handler(index) {
                console.log(index)
                 scroll.goToPage(index, 0, 300)
            }
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
            scrollX: true,
            scrollY: true,
            snap: true
        }
        vm = this
        scroll = new IScroll(this.$el, o)
        console.log(scroll)
        scroll.on('scrollEnd', (e) => {
            console.log(scroll.currentPage)
            //vm.index = scroll.currentPage.pageX

            if (typeof (vm.indexChange) != 'undefined')
                vm.indexChange(scroll.currentPage.pageX)
        })

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
