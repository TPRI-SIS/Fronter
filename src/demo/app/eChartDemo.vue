<template>
    <div class="main">
    <gesture :swipeRight="swipeRight">
        <mu-raised-button class="demo-raised-button" icon="android" backgroundColor="#a4c639" @click="changeTitle"/>
    <vueEchart :options="options" :mystyle="nowstyle"></vueEchart>

    </gesture>
    </div>
</template>

<script>
var list=[5, 20, 36, 10, 10, 20];
export default {
    name: 'eChartDemo',
    data() {
        return {
            contentStyle: {
                height: this.$screen.height
            },
            nowstyle: {
                width: '300px',
                height: '400px'   
            },
            options:{
                title: { text: 'Vue---ECharts' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            },
            swipeRight: function (e) {
                this.$router.go(-1)
            }
        }
    },
    methods:{
        changeTitle:function(){
            this.options={
                title: { text: 'Vue---ECharts' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","毛衣"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20,50]
                }]
            }

        }
    }
}
</script>

<style scoped>
.main {
    background: #95D1DF;
    height: 100%;
}
</style>