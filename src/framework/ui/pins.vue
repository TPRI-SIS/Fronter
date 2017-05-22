<template>
    <div class="main">
        <slot></slot>
    </div>
</template>


<script>
    export default {
        name: 'pins',
        data() {
            return {}
        },
        props: {
            cols: {
                type: Number,
                default: 2
            },
            padding: {
                type: Number,
                default: 4
            }
        },
        methods: {
            caculate(item, cols, itemCount, index) {
                var ele = $(item);
                var rowCount = Math.ceil(itemCount / cols);
                var pWidth = item.parentNode.offsetWidth / cols;
                var pHeight = item.parentNode.offsetHeight / rowCount;

                var isLastComlum=(index+1)%cols==0;
                var borderRightWidth=isLastComlum?"0px":"1px";

                var isAvg = itemCount % cols==0;
                var lastRowStartIndex=isAvg?(itemCount-3):(itemCount-itemCount % cols);

                var borderBottomWidth;
                if(index>=lastRowStartIndex){
                    borderBottomWidth="0px";
                }else{
                    borderBottomWidth="1px";
                }
                ele.css({
                    "width": pWidth + "px",
                    "height": pHeight + "px",
                    "display": "block",
                    "position": "relative",
                    "float": "left",
                    "border-bottom-width": borderBottomWidth,
                    "border-top-width": "0px",
                    "border-right-width": borderRightWidth,
                    "border-left-width": "0px",
                    "border-style": "solid",
                    "overflow": "hidden",
                    "color":"gray"
                });
            }
        },
        mounted() {
            var vm = this;
            var expr = $(this.$el);
            var pins = expr.children();
            $.each(pins, function(index, item) {
                vm.caculate(item, vm.cols, pins.length, index);
            });
        }
    }
</script>

<style scoped>
    .main {}
</style>