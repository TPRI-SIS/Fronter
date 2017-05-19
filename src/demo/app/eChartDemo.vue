<template>
    <div class="main">
        <gesture :swipeRight="swipeRight">
            <mu-appbar title="Title" class="appbar">
                <mu-flat-button label="确定" slot="right" @click="changeTitle" />
            </mu-appbar>
            <scroll :options='scrollOptions' :style="{height:scrollHeight}" class="content" :width="scrollStyle.width" >
                    <div id="tt">aaaa</div>
                    <div style="height:500px;">
                        <vueEchart :options="options1"  v-on:chartclick="chartClick" auto-resize></vueEchart>
                    </div>
                    <div style="height:500px">
                        <vueEchart  :options="options2"></vueEchart>
                    </div>
                    <div style="height:500px;">
                        <vueEchart  :options="options1"  v-on:chartclick="chartClick"></vueEchart>
                    </div>
                    <div style="height:500px">
                        <vueEchart  :options="options2"></vueEchart>
                    </div>
                    <div style="height:500px;">
                        <vueEchart :options="options1"  v-on:chartclick="chartClick"></vueEchart>
                    </div>
                    <div style="height:500px">
                        <vueEchart  :options="options2"></vueEchart>
                    </div>
                    <div style="height:500px;">
                        <vueEchart  :options="options1"  v-on:chartclick="chartClick"></vueEchart>
                    </div>
                    <div style="height:500px">
                        <vueEchart  :options="options2"></vueEchart>
                    </div>
                    <div style="height:500px;">
                        <vueEchart :options="options1"  v-on:chartclick="chartClick"></vueEchart>
                    </div>
                    <div style="height:500px">
                        <vueEchart  :options="options2"></vueEchart>
                    </div>
                    <div style="height:500px;">
                        <vueEchart  :options="options1"  v-on:chartclick="chartClick"></vueEchart>
                    </div>
                    <div style="height:500px">
                        <vueEchart  :options="options2"></vueEchart>
                    </div>
                  
                    
            </scroll>
        </gesture>
    </div>
</template>

<script>
export default {
    name: 'eChartDemo',
    data() {
        return {
            scrollHeight: this.$screen.height - 64 + 'px',
            scrollStyle:{
                width:this.$screen.width+'px',
                height:'2000px'
            },
            contentStyle: {
                height: this.$screen.height
            },
            scrollOptions: {
                scrollX: false,
                scrollY: true
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
            swipeRight: function (e) {
                this.$router.go(-1)
            }
        }
    },
    methods: {
        chartClick: function (param) {
            //取数据
            this.options2 = {
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
        changeTitle: function () {
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
    },
    mounted(){
        var id=   document.getElementById('tt')
        tt.addEventListener('click',(e)=>{alert('a')})

    },
     activated: function () {
      console.log(3)
    },
    deactivated: function () {
      console.log(4)
    }
}
</script>

<style scoped>
.main {
    background: #95D1DF;
    height: 100%;
}

.appbar {
    position: absolute;
    top: 0px;
    width: 100%;
}

.content {
    width: 100%;
    top: 64px;
    position: absolute;
}
</style>