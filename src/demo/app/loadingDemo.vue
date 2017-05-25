<style scoped>
    .main {}
</style>


<template>
    <div>
        <mu-flat-button icon="android" class="demo-flat-button" backgroundColor="#a4c639" color="#FFF" @click="startLoading" />
        <mu-flat-button icon="android" class="demo-flat-button" backgroundColor="#a4c639" color="#FFF" @click="addLoading" />
       <loading :isOpen='isLoading' :value="loadingValue" :closed="handle" width="300px" color="#00CFFD" :size="64"  :strokeWidth="5">
           <div>AAAAAAA</div>
           <div>BBBBBBB</div>
           <div>CCCCCCC</div>
           <div>AAAAAAA</div>
           <div>BBBBBBB</div>
           <div>CCCCCCC</div>
                      <div>AAAAAAA</div>
           <div>BBBBBBB</div>
           <div>CCCCCCC</div>
                      <div>AAAAAAA</div>
           <div>BBBBBBB</div>
           <div>CCCCCCC</div>           
        </loading>
    </div>
</template>


<script>
    export default {
        name: 'loadingDemo',
        data() {
            return {
                isLoading: false,
                loadingValue: 0
            }
        },
        methods: {
            startLoading: function(e) {
                this.isLoading = true;
                // this.timer = setInterval(() => {
                //     this.loadingValue += 10
                //     if (this.loadingValue > 100) clearInterval(this.timer)
                // }, 100)
            },
             addLoading: function(e) {
                    this.loadingValue += 10
            },           
            handle:function(){
                this.isLoading=false;
                this.loadingValue=0
            }
        },
        beforeDestroy() {
            clearInterval(this.timer)
        }
    }
</script>