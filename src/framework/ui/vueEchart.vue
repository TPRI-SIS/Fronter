<template>
    <div class="main">
        <div id="chart" :style="styleObject"></div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    var myChart;
    export default {
        name: 'vueEchart',
        data() {
            return {
                styleObject: this.mystyle
            }
        },
        props: {
            options: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            mystyle: {
                type: Object,
                default: function() {
                    return {
                        width: '800px',
                        height: '400px'
                    }
                }
            }
        },
        mounted: function() {
            myChart = echarts.init(document.getElementById('chart'));
            // 绘制图表
            myChart.setOption(this.options);
        },
        watch: {
            //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象 
            options: {　　　　　　　　　　　　　　　　　　　
                handler(curVal, oldVal) {　　　　　　　　　　　　
                    this.refresh();　　　　　　　　　　
                },
                deep: true　　　　　　　　
            },
            mystyle: {　　　　　　　　　　　　　　　　　　　
                handler(curVal, oldVal) {　　　　　　　　　　　　
                    myChart.resize(this.mystyle);　　　　　　　　　
                },
                deep: true　　　　　　　　
            }
        },
        methods: {
            refresh: function() {
                myChart.setOption(this.options);
            }
        }
    }
</script>
<style scoped>
    .main {
        background: green;
        height: 100%
    }
</style>