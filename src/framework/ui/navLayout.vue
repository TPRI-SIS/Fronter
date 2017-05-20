<template>
    <div class="main" id="navLayout-content">
        <gesture :swipeRight="swipeRight" :swipeLeft="swipeLeft">
            <mu-drawer :open="isOpen" :docked="docked" class="nav">
                <slot name="nav" />
            </mu-drawer>
            <div  v-bind:class="'content '+contentClass" :style="{width:width}">
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
            openNav: !$screen.isPhone(),
            docked: !$screen.isPhone(),
            contentClass: !$screen.isPhone() ? 'min' : '',
            width: '100%'
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
            if(!$screen.isPhone()){
                if(this.openNav){
                    this.contentClass ='min'
                    this.width=$('#navLayout-content').width()-256+"px"
                    
                }
                else{
                    this.contentClass =  'max' 
                    this.width='100%'
                }
            }

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
    },
    mounted(){
         if(!$screen.isPhone()){
              this.width=$('#navLayout-content').width()-256+"px"
         }

        console.log(this.width)
    }
}
</script>

<style scoped>
.main {
    height: 100%;
}

.nav{
    position: absolute; 
}

.content {
    height: 100%;
    position: absolute;
}

.max {
    transition: all .45s;
    left: 0px;
}

.min {
    transition: all .45s;
    left: 256px;
}
</style>

