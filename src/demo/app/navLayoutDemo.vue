<template>
  <navLayout :open="open" :trigger="handleTrigger">
    <div slot="nav">
      <mu-appbar title="Title">

      </mu-appbar>
    </div>
    <div class="content" slot="content">
      <mu-appbar title="Title" >
        <mu-icon-button icon="menu" slot="left" />
        <mu-flat-button label="expand_more" slot="right" />
        <mu-flat-button href="333" label="expand_more" slot="right" />
        <mu-icon-button icon="expand_more" slot="right" />
      </mu-appbar>

        <mu-raised-button label="Primary" class="demo-raised-button" primary @click="openOrClose"/>
    </div>
  </navLayout>
</template>
<script>
export default {
  name: 'navLayoutDemo',
  data(){
    return{
        open:false
    }
  },
  methods:{
    openOrClose:function () {  
      
        this.open=this.open?false:true
    },
    handleTrigger:function(e){
      
    }
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
</style>


