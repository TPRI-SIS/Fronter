<template>
    <div class="main">
        <gesture :swipeRight="swipeRight">
            <mu-appbar title="Title" class="appbar">
                <mu-flat-button label="确定" slot="right" @click="changeTitle" />
            </mu-appbar>
            <scroll :options='scrollOptions' :style="{height:scrollHeight}" class="content" :width="scrollStyle.width">
                <div style="height:400px;padding:4px">
                    <vueEchart :options="options1" v-on:chartclick="chartClick" auto-resize isInit :delayLoad="1000"></vueEchart>
                </div>
                <div style="height:400px;padding:4px">
                    <vueEchart :options="options2" isInit :delayLoad="2000"></vueEchart>
                </div>
                <div style="height:400px;padding:4px">
                    <vueEchart :options="options3" v-on:chartclick="chartClick" isInit :delayLoad="3000"></vueEchart>
                </div>
                <div style="height:400px;padding:4px">
                    <vueEchart :options="options4" isInit :delayLoad="4000"></vueEchart>
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
                scrollHeight: $screen.height - 64 + 'px',
                scrollStyle: {
                    width: $screen.width + 'px',
                    height: '2000px'
                },
                contentStyle: {
                    height: $screen.height
                },
                scrollOptions: {
                    scrollX: false,
                    scrollY: true
                },
                options1: {
                    title: {
                        text: '柱状图'
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
                        text: '某站点用户访问来源',
                        subtext: '纯属虚构',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        bottom: 'bottom',
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [{
                                value: 335,
                                name: '直接访问'
                            },
                            {
                                value: 310,
                                name: '邮件营销'
                            },
                            {
                                value: 234,
                                name: '联盟广告'
                            },
                            {
                                value: 135,
                                name: '视频广告'
                            },
                            {
                                value: 1548,
                                name: '搜索引擎'
                            }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }]
                },
                options3: {
                    title: {
                        text: '折线图堆叠'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        bottom: 'bottom',
                        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'line',
                            stack: '总量',
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '直接访问',
                            type: 'line',
                            stack: '总量',
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '搜索引擎',
                            type: 'line',
                            stack: '总量',
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                },
                options4: {
                    title: {
                        text: '漏斗图',
                        subtext: '纯属虚构',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c}%"
                    },
                    legend: {
                         bottom: 'bottom',                       
                        data: ['展现', '点击', '访问', '咨询', '订单']
                    },
                    calculable: true,
                    series: [{
                        name: '漏斗图',
                        type: 'funnel',
                        left: '10%',
                        top: 60,
                        //x2: 80,
                        bottom: 60,
                        width: '80%',
                        // height: {totalHeight} - y - y2,
                        min: 0,
                        max: 100,
                        minSize: '0%',
                        maxSize: '100%',
                        sort: 'descending',
                        gap: 2,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside'
                            },
                            emphasis: {
                                textStyle: {
                                    fontSize: 20
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                length: 10,
                                lineStyle: {
                                    width: 1,
                                    type: 'solid'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: '#fff',
                                borderWidth: 1
                            }
                        },
                        data: [{
                                value: 60,
                                name: '访问'
                            },
                            {
                                value: 40,
                                name: '咨询'
                            },
                            {
                                value: 20,
                                name: '订单'
                            },
                            {
                                value: 80,
                                name: '点击'
                            },
                            {
                                value: 100,
                                name: '展现'
                            }
                        ]
                    }]
                },
                swipeRight: function(e) {
                    this.$router.go(-1)
                }
            }
        },
        methods: {
            chartClick: function(param) {
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
        },
        mounted() {

        },
        activated: function() {
            console.log(3)
        },
        deactivated: function() {
            console.log(4)
        }
    }
</script>

<style scoped>
    .main {
        background: white;
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