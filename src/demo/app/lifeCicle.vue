<template>
    <gesture :swipeRight="swipeRight">
         <mu-raised-button :label="txt" class="demo-raised-button" primary @click="changeData" />
    </gesture>
</template>

<script>
export default{
    name:'lifeCicle',
    data(){
        return{
            txt:'aaa'
        }
    },
    methods:{
        swipeRight:function(e){
             this.$router.go(-1)   
        },
        changeData:function () {  
            this.txt=(new Date()).toString()
        }
    },
    beforeCreate(){
        alert('初始化组件前')
    },
    created(){
        alert('初始化组件实例')
    },
    beforeUpdate(){
        alert('vm数据更新前')
    },
    updated(){
        alert('vm数据更新后')
    },
    beforeMount(){
        alert('组件渲染前')
    },
    mounted(){
        alert('组件渲染后')
    },
    beforeDestroy(){
        alert('组件销毁前')
    },
    destroyed(){
        alert('组件销毁后')
    },
    activated(){
        alert('组件激活')
    },
    deactivated(){
        alert('组件非激活')
    }

    
    
}

</script>

<style scoped>

</style>
