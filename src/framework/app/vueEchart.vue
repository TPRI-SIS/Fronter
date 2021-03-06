<template>
    <div class="echarts">
    </div>
</template>

<style>
    .echarts {
        width: 100%;
        height: 100%;
    }
</style>

<script>
    import echarts from 'echarts'
    // enumerating ECharts events for now
    const ACTION_EVENTS = [
        'legendselectchanged',
        'legendselected',
        'legendunselected',
        'datazoom',
        'datarangeselected',
        'timelinechanged',
        'timelineplaychanged',
        'restore',
        'dataviewchanged',
        'magictypechanged',
        'geoselectchanged',
        'geoselected',
        'geounselected',
        'pieselectchanged',
        'pieselected',
        'pieunselected',
        'mapselectchanged',
        'mapselected',
        'mapunselected',
        'axisareaselected',
        'brush',
        'brushselected'
    ]
    const MOUSE_EVENTS = [
        'click',
        'dblclick',
        'mouseover',
        'mouseout',
        'mousedown',
        'mouseup',
        'globalout'
    ]
    export default {
        name: 'vueEchart',
        props: {
            options: Object,
            theme: String,
            initOptions: Object,
            group: String,
            isInit: {
                type: Boolean,
                default: false
            },
            delayLoad: {
                type: Number,
                default: 500
            },
            autoResize: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                chart: null
            }
        },
        computed: {
            // Only recalculated when accessed from JavaScript.
            // Won't update DOM on value change because getters
            // don't depend on reactive values
            width: {
                cache: false,
                get() {
                    return this.chart.getWidth()
                }
            },
            height: {
                cache: false,
                get() {
                    return this.chart.getHeight()
                }
            },
            isDisposed: {
                cache: false,
                get() {
                    return this.chart.isDisposed()
                }
            }
        },
        watch: {
            // use assign statements to tigger "options" and "group" setters
            options: {
                handler(options) {
                    if (!this.chart && options) {
                        this._init()
                    } else {
                        this.chart.setOption(this.options, true)
                    }
                },
                deep: true
            },
            isInit: {
                handler(isInit) {
                    if (!this.chart && isInit) {
                        this._init()
                    }
                },
                deep: true
            },
            group: {
                handler(group) {
                    this.chart.group = group
                }
            }
        },
        methods: {
            // provide a explicit merge option method
            mergeOptions(options) {
                this._delegateMethod('setOption', options)
            },
            // just delegates ECharts methods to Vue component
            // use explicit params to reduce transpiled size for now
            resize(options) {
                this._delegateMethod('resize', options)
            },
            dispatchAction(payload) {
                this._delegateMethod('dispatchAction', payload)
            },
            convertToPixel(finder, value) {
                return this._delegateMethod('convertToPixel', finder, value)
            },
            convertFromPixel(finder, value) {
                return this._delegateMethod('convertFromPixel', finder, value)
            },
            containPixel(finder, value) {
                return this._delegateMethod('containPixel', finder, value)
            },
            showLoading(type, options) {
                this._delegateMethod('showLoading', type, options)
            },
            hideLoading() {
                this._delegateMethod('hideLoading')
            },
            getDataURL(options) {
                return this._delegateMethod('getDataURL', options)
            },
            getConnectedDataURL(options) {
                return this._delegateMethod('getConnectedDataURL', options)
            },
            clear() {
                this._delegateMethod('clear')
            },
            dispose() {
                this._delegateMethod('dispose')
            },
            _delegateMethod(name, ...args) {
                if (!this.chart) {
                    Vue.util.warn(`Cannot call [${name}] before the chart is initialized. Set prop [options] first.`, this)
                    return
                }
                return this.chart[name](...args)
            },
            _init() {
                if (this.chart || !this.isInit) {
                    return
                }
                let chart = echarts.init(this.$el, this.theme, this.initOptions)
                if (this.group) {
                    chart.group = this.group
                }
                var vm = this;
                setTimeout(function() {
                    chart.setOption(vm.options, true)
                }, this.delayLoad);
                // expose ECharts events as custom events
                ACTION_EVENTS.forEach(event => {
                    chart.on(event, params => {
                        this.$emit(event, params)
                    })
                })
                MOUSE_EVENTS.forEach(event => {
                    chart.on(event, params => {
                        //this.$emit(event, params)
                        // for backward compatibility, may remove in the future
                        //添加事件的前缀chart，避免事件名称冲突
                        this.$emit('chart' + event, params)
                    })
                })
                if (this.autoResize) {
                    //this.__resizeHanlder = chart.resize();
                    //window.addEventListener('resize', this.__resizeHanlder)
                    //上述方法无效
                    window.addEventListener('resize', (e) => {
                        chart.resize()
                    });
                }
                this.chart = chart
            }
        },
        mounted() {
            // auto init if `options` is already provided
            if (this.options) {
                this._init()
            }
        },
        beforeDestroy() {
            if (!this.chart) {
                return
            }
            if (this.autoResize) {
                //window.removeEventListener('resize', this.__resizeHanlder)
                //有点bug
                //window.removeEventListener('resize', (e) => {
                //    this.resize()
                //});
            }
            this.dispose()
        },
        connect(group) {
            if (typeof group !== 'string') {
                group = group.map(chart => chart.chart)
            }
            echarts.connect(group)
        },
        disconnect(group) {
            echarts.disConnect(group)
        },
        registerMap(...args) {
            echarts.registerMap(...args)
        },
        registerTheme(...args) {
            echarts.registerTheme(...args)
        }
    }
</script>
