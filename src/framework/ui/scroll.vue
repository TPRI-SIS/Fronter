<template>
    <div class="scroll">
      <slot></slot>
    </div>
</template>

<script>
    import IScroll from 'iscroll'

export default {
    name:'scroll',
    props:{
        options: {
           type:Object,
           default:function(){
               return{
                    mouseWheel: true,
                click: true,
                preventDefault: true,
                tap: false,
                bounce: true,
                disableTouch: false,
                scrollX:true,
                scrollY:false
               }
           }
        }
    },

    mounted(){
        console.log(this.options)
         var scroll =new IScroll(this.$el,this.options)
    },
}
</script>

<style scoped>
.scroll{
      z-index: -1;
}
</style>



