<template>
    <div class="main">
        <gesture :swipeRight="swipeRight" :swipeLeft="swipeLeft">
            <mu-drawer :open="isOpen" :docked="docked">
                <slot name="nav" />
            </mu-drawer>
            <div v-bind:class="'content '+contentClass">
                <slot name="content" />
            </div>
        </gesture>
    </div>
</template>

<script>
// 导航-内容布局组件
// open:导航栏是否显示开关
// trigger:导航栏状态发生变化时触发
// 用法说明：
//  <navLayout :open="open" :trigger="handleTrigger">
//     <div slot="nav">
//     </div>
//     <div class="content" slot="content">
//     </div>
//   </navLayout>
// slot="nav"表示为导航栏
// 输咯="content"表示为内容
// 向右滑动打开导航栏
// 向左滑动关闭导航栏


export default {
    name: 'navLayout',
    data() {
        return {
            openNav: !this.$screen.isPhone(),
            docked: !this.$screen.isPhone(),
            contentClass: !this.$screen.isPhone() ? 'min' : ''
        }
    },

    props: {
        open: {
            type: Boolean,
            default: true
        },
        trigger: {
            type: Function
        }
    },
    watch: {
        open: function (value) {
            this.openNav = value
        }
    },
    computed: {
        isOpen: function () {
            if (this.openNav)
                this.contentClass = !this.$screen.isPhone() ? 'min' : ''
            else
                this.contentClass = !this.$screen.isPhone() ? 'max' : ''
            this.trigger(this.openNav)
            return this.openNav
        }
    },
    methods: {
        swipeRight: function (e) {
            this.openNav = true
        },
        swipeLeft: function (e) {
            this.openNav = false
        },
    }
}
</script>

<style scoped>
.main {
    height: 100%;
}

.content {
    height: 100%;
}

.max {
    transition: all .45s;
    padding-left: 0px;
    width: auto;
}

.min {
    transition: all .45s;
    padding-left: 256px;
    width: auto;
}
</style>

