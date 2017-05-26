<template>
    <div class="main">
        <loading :isOpen='isLoading' :value="loadingValue" :closed="handle" spinner="spinner02">
            <gesture :swipeRight="back">
                <scroll :style="{height:scrollHeight}" height="1000px">
                    <card class="card deepPurple" :style="{width:cardWidth}" :onRevealTrigger="triggerChart1">
                        <div slot="title">实时负荷</div>
                        <div slot="content">
                            <p class="num">33MW</p>
                        </div>
                        <div slot="action">
                            <mu-raised-button label="平均值" />
                            <mu-raised-button label="最大值" />
                        </div>
                        <div slot="reveal" class="reveal">
                            <vueEchart :options="options1" :isInit="chart1Init" :delayLoad="1500"></vueEchart>
                        </div>
                    </card>
                    <card class="card deepPurple" :style="{width:cardWidth}" :onRevealTrigger="triggerChart1">
                        <div slot="title">实时负荷</div>
                        <div slot="content">
                            <p class="num">33MW</p>
                        </div>
                        <div slot="action">
                            <mu-raised-button label="平均值" />
                            <mu-raised-button label="最大值" />
                        </div>
                        <div slot="reveal" class="reveal">
                            <vueEchart :options="options1" :isInit="chart1Init" :delayLoad="1500"></vueEchart>
                        </div>
                    </card>
                </scroll>
            </gesture>
        </loading>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cardWidth: ($screen.width - 24 + 'px'),
                scrollHeight: $screen.height + 'px',
                isLoading: false,
                loadingValue: 0,
                chart1Init: false,
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
                }
            }
        },
        methods: {
            back: function() {
                this.$router.go(-1)
            },
            triggerChart1: function(e) {
                if (e) {
                    //this.startLoading();
                    this.chart1Init = true;
                }
            },
            startLoading: function(e) {
                this.isLoading = true;
                this.timer = setInterval(() => {
                    this.loadingValue += 10
                    if (this.loadingValue >= 100) {
                        clearInterval(this.timer)
                    }
                }, 150)
            },
            handle: function() {
                this.isLoading = false;
                this.loadingValue = 0;
                clearInterval(this.timer);
            }
        },
        beforeDestroy() {
            clearInterval(this.timer)
        },
        mounted() {
            this.startLoading();
        }
    }
</script>

<style scoped>
    .num {
        font-size: 36px;
        padding-left: 48px;
        color: white;
    }
    .reveal {
        width: 100%;
        height: 100%;
    }
    .card {
        color: white;
        margin-left: 12px;
        margin-right: 12px;
        margin-top: 6px;
        margin-bottom: 6px;
        float: left;
    }
    .default {
        background-color: #23EE1F;
    }
    .deepPurple {
        background-color: #673ab7;
    }
    .blue {
        background-color: #2196f3;
    }
    .teal {
        background-color: #009688;
    }
</style>

