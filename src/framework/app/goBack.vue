<template>
  <div class="goBack">
     <mu-icon-button class="button" icon="arrow_back_ios" @click="back">
     </mu-icon-button>
     <p class="title" >{{title}}</p>
  </div>
</template>

<script>

export default {
  name: 'goBack',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods:{
    back:function(){
        this.$router.go(-1)
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goBack{
  position: fixed;
  width:100%;
  top:0px;
  left: 0px;
  height: 45px;
  color:white!important;
  float: left;
  z-index: 99999;
}

.title{
  font-size: 16px;
  margin-top:12px;
  float: left;
}

.button{
  float:left;
}



</style>
