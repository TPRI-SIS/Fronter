<style scoped>
    .mask {
        position: absolute;
        z-index: 99999;
        background: black;
        opacity: .4;
    }
    .circular {
        position: absolute;
        width: 100%;
        z-index: 99999999999;
    }
    .main {}
    .loadingtext{
        color:white
    }
</style>


<template>
    <div class="main" :style="{width:width}">
        <transition name="mu-overlay-fade">
            <div class="mask" v-show="dialog">
            </div>
        </transition>
        <transition name="mu-overlay-fade">
            <div class="circular" v-show="dialog">
                <div class="loadingtext">{{loadingText}}</div>
                <mu-circular-progress mode="determinate" :value="value" :color="color" :size="size"  :strokeWidth="strokeWidth" :max="max" :min="min"/>
            </div>
        </transition>
        <slot>
            <!-- 被遮罩的内容-->
        </slot>
    </div>
</template>


<script>
    export default {
        name: 'loading',
        data() {
            return {
                open: false
            }
        },
        props: {
            isOpen: {
                type: Boolean,
                default: false
            },
            value: {
                type: Number,
                default: 0
            },
            width: {
                type: String,
                default: '100%'
            },
            closed: {
                type: Function
            },
            loadingText:{
                type: String,
                default: '正在加载,请稍后....'
            },
            max: {
                type: Number,
                default: 100
            },
            min: {
                type: Number,
                default: 0
            },
            color: {
                type: String
            },
            size: {
                type: Number,
                default: 24
            },
            strokeWidth: {
                type: Number,
                default: 3
            }
        },
        watch: {
            isOpen: function(value) {
                this.open = value
            },
            value: function(value) {
                if (value >= 100) {
                    this.open = false
                    if (typeof(this.closed) != 'undefined') {
                        this.closed()
                    }
                }
            }
        },
        computed: {
            dialog: function() {
                return this.open
            }
        },
        methods: {},
        mounted() {
            var expr = $(this.$el);
            var mask = expr.children('.mask');
            mask.css("height", expr.height());
            mask.css("width", expr.width());
            var ci = expr.children('.circular');
            ci.css("width", expr.width());
            ci.css("top", expr.height() / 2);
        }
    }
</script>