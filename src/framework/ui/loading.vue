<style scoped>
    .mask {
        position: absolute;
        z-index: 99999;
        background: rgba(0, 0, 0, 0.2);
    }
    .circular {
        position: absolute;
        width: 100%;
        z-index: 99999999999;
    }
    .main {}
    .loadingtext {
        color: white;
        font-weight: bold;
    }


</style>


<template>
    <div class="main" :style="{width:width,height:'100%'}">
        <transition name="mu-overlay-fade">
            <div class="mask" v-show="dialog">
            </div>
        </transition>
        <transition name="mu-overlay-fade">
            <div class="circular" v-show="dialog">
                <div class="loadingtext">{{loadingText}}</div>
            </div>
        </transition>
        <slot>
            <!-- 被遮罩的内容-->
        </slot>
    </div>
</template>


<script>
    var spinner = {
          spinner01: '<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',
        //spinner02: '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>',
        spinner03: '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>',
        spinner04: '<div class="fl spinner4"></div>',
        spinner05: '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>',
        spinner06: '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>',
        spinner07: `<div class="fl spinner7">
        <div class="circ1">
        </div>
        <div class="circ2">
        </div>
        <div class="circ3">
        </div>
        <div class="circ4">
        </div>
        </div>`,
        spinner02: `<div class="sk-circle">
                        <div class="sk-circle1 sk-child"></div>
                        <div class="sk-circle2 sk-child"></div>
                        <div class="sk-circle3 sk-child"></div>
                        <div class="sk-circle4 sk-child"></div>
                        <div class="sk-circle5 sk-child"></div>
                        <div class="sk-circle6 sk-child"></div>
                        <div class="sk-circle7 sk-child"></div>
                        <div class="sk-circle8 sk-child"></div>
                        <div class="sk-circle9 sk-child"></div>
                        <div class="sk-circle10 sk-child"></div>
                        <div class="sk-circle11 sk-child"></div>
                        <div class="sk-circle12 sk-child"></div>
                    </div>`
    }
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
            loadingText: {
                type: String,
                default: 'Loading.......'
            },
            spinner: {
                type: String,
                default: 'spinner02'
            }
        },
        watch: {
            isOpen: function(value) {
                  console.log(this.open)
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
               console.log(this.open)
                if (this.open) {

                    this.showMask();
                }
                return this.open
            }
        },
        methods: {
            showMask() {
                var expr = $(this.$el);
                console.log(expr)
                var mask = expr.children('.mask');
                mask.css("height", expr.outerHeight() + "px");
                mask.css("width", expr.outerWidth() + "px");
                var ci = expr.children('.circular');
                ci.css("width", expr.outerWidth());
                if (expr.outerHeight() <= 200) {
                    ci.css("top", 0);
                } else if(expr.outerHeight()>=$screen.height) {
                    ci.css("top", ($screen.height / 2) - 40);
                }else{
                    ci.css("top", (expr.height() / 2) - 40);
                }
                ci.html(spinner[this.spinner])
            }
        },
        mounted() {}
    }
</script>
