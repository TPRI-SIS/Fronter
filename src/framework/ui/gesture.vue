<template>
    <div class="gesture">
      <slot></slot>
    </div>
</template>

<script>
    import Hammer from 'hammerjs'

export default {
    name:'gesture',
    props:{
        options: {
           type:Object,
           default:function(){
               return{
               
               }
           }
        }
    },

    mounted(){
         var h =new Hammer(this.$el)
         h.on('swipe', function(ev) {
     	    console.log(ev);
         })  
    }

}
</script>

<style scoped>
.scroll{
      z-index: -1;
}
</style>



