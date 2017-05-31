
<template>
    <div>
      <grid-layout class="main" :width="width" :height="height" :columnCount="2" :rowCount="3" columnDefine="3*,1*" rowDefine="1*,1*,1*">
          <div data-row="0" data-colum="0" >
1111
          </div>
          <div data-row="0" data-column="1" >111</div>
          <div data-row="1" data-column="0" data-columnSpan="2">11</div>
          <div data-row="2" data-column="0" >11</div>
      </grid-layout>
    </div>
</template>

<script>
  import GridLayout from "../../framework/ui/gridLayout";
    export default{
      name: '',
        data(){
            return {
                width:$screen.width-24+'px',
                height:$screen.height-76+'px'

            }
        },
        methods: {},
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

  .main{
    position: absolute;
    top:64px;
    left: 12px;
  }

  .main div{
    border: solid 1px black;
  }

</style>
