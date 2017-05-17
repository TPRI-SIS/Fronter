<template>
    <div class="main">
        <gesture :swipeRight="swipeRight">
            <mu-raised-button class="demo-raised-button" icon="android" backgroundColor="#a4c639" @click="changeTitle" />
            <div style="height:50%">
                <vueEchart :options="options1" :autoResize="false" :chartClick="chartClick"></vueEchart>
            </div>
            <div style="height:50%">
                <vueEchart :options="options2" ></vueEchart>
            </div>
        </gesture>
    </div>
</template>

<script>
    export default {
        name: 'eChartDemo',
        data() {
            return {
                contentStyle: {
                    height: this.$screen.height
                },
                options1: {
                    title: {
                        text: 'Vue---ECharts'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                },
                options2: {
                    title: {
                        text: 'Vue---ECharts2'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                },
                swipeRight: function(e) {
                    this.$router.go(-1)
                }
            }
        },
        methods: {
            chartClick:function(param){
                 //取数据
                 this.options2={
                    title: {
                        text: 'Vue---ECharts2'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ["xx", "xx", "xx", "裤xx子", "xx", "xx"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                }
            },
            changeTitle: function() {
                this.options1 = {
                    title: {
                        text: 'Vue---ECharts'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "毛衣"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20, 50]
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