<template>
    <div class="chart" style="height:100%;width:100%">
    </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        name: 'vueEchart',
        data() {
            return {
                myChart: null
            }
        },
        props: {
            options: {
                type: Object,
                default: function() {
                    return {}
                }
            },
            autoResize: {
                type: Boolean,
                default: function() {
                    return true
                }
            },
            chartClick: {
                type: Function
            }
        },
        mounted: function() {
            let vm = this;
            this.myChart = echarts.init(this.$el);
            // 绘制图表
            this.myChart.setOption(this.options);
            if (this.autoResize) {
                window.addEventListener('resize', (e) => {
                    this.myChart.resize()
                });
            }
            this.myChart.on('click', function(params) {
                vm.chartClick(params);
            });
        },
        watch: {
            //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象 
            options: {　　　　　　　　　　　　　　　　　　　
                handler(curVal, oldVal) {　　　　　　　　　　　　
                    this.refresh();　　　　　　　　　　
                },
                deep: true　　　　　　　　
            }
        },
        methods: {
            refresh: function() {
                this.myChart.setOption(this.options);
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