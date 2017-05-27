<template>
  <div>
    <scroll-ex :style="{height:mainScrollHeight}" :upOpenClosed="handlerUp"  :downOpenClosed="handlerDown" :width="width" :height="height">
      <mu-list style="padding: 0px">
        <mu-list-item style="background-color: dodgerblue" v-for="item in list" :title="item.name" class="item"
                      :key="item.name">
        </mu-list-item>
      </mu-list>
      <div slot="up">
        <div class="upIndicator">
          <i class="material-icons md-48 menuItemIcon">android</i>
          <p>松开刷新</p>
        </div>

      </div>
      <div slot="down">
        <div class="upIndicator">
          <i class="material-icons md-48 menuItemIcon">phone</i>
          <p>加载更多</p>

        </div>
      </div>
    </scroll-ex>
  </div>
</template>

<script>
  import ScrollEx from "../../framework/ui/scrollEx";


  var source= [
    {
      name: "test1"
    },
    {
      name: "test2"
    },
    {
      name: "test3"
    },
    {
      name: "test4"
    },
    {
      name: "test5"
    },
    {
      name: "test1"
    },
    {
      name: "test2"
    },
    {
      name: "test3"
    },
    {
      name: "test4"
    },
    {
      name: "test5"
    },
    {
      name: "test1"
    },
    {
      name: "test2"
    },
    {
      name: "test3"
    },
    {
      name: "test4"
    },
    {
      name: "test5"
    }
  ]


  export default{
    name: '',
    data(){
      return {
        width: $screen.width + 'px',
        height: source.length * 48 + 'px',
        mainScrollHeight: $screen.height + 'px',
        list:source

      }
    },
    methods: {
        handlerUp:function () {
           this.list=source.slice()
          this.height= this.list.length * 48 + 'px'
        },
        handlerDown:function(){

            for(var i=11;i<20;i++){
                this.list.push({name:'test'+new Date()})
            }
            this.height= this.list.length * 48 + 'px'
        }

    },
    beforeCreate(){

    },
    created(){

    },
    beforeUpdate(){

    },
    updated(){

    },
    beforeMount(){

    },
    mounted(){

    },
    beforeDestroy(){

    },
    destroyed(){

    },
    activated(){

    },
    deactivated(){

    }
  }


</script>

<style scoped>
  .upIndicator {
    text-align: center;
    color: #2196f3;
  }

  .upIndicator p {
    margin: 0px;
  }


</style>
