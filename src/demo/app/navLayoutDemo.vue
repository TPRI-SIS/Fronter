<template>
  <navLayout :open="open" :trigger="handleTrigger">
    <div slot="nav">
      <mu-appbar title="open">
  
      </mu-appbar>
    </div>
    <div class="content" slot="content">
      <mu-appbar title="Title" class="appBar">
        <mu-icon-button icon="menu" slot="left" />
        <mu-flat-button label="expand_more" slot="right" />
        <mu-flat-button  label="返回" slot="right" @click='openOrClose' />
        <mu-icon-button icon="expand_more" slot="right" />
      </mu-appbar>
      <div class="appContent">
        <mu-raised-button label="Primary" class="demo-raised-button" primary @click="openOrClose" />
      </div>
  
    </div>
  </navLayout>
</template>
<script>
export default {
  name: 'navLayoutDemo',
  data() {
    return {
      open: false
    }
  },
  watch:{
    open:function(value){
      console.log(value)
    }
  },
  methods: {
    openOrClose: function () {

      this.$router.go(-1)
    },
    handleTrigger: function (e) {

    }
  },
  activated(){
      //当窗口激活时加载数据
  },
  deactivated(){
    //当窗口为非激活时做一些东西，例如停止计时器之类
  }
}
</script>

<style scoped>
.appBar {
  position: absolute;
  width: 100%;
}

.appContent{
    position: absolute;
  width: 100%;
  top:64px;
}

.main {
  height: 100%;
}

.content {
  height: 100%;
}
</style>


