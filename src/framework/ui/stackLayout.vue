<template>
    <div :style="{height:height,width:width}">
        <slot>
        </slot>
    </div>
</template>

<script>

export default {
    name: 'stackLayout',
    data() {
        return {
            height: '',
            width: ''
        }
    },
    props: {
        direction: {
            type: String,
            //horizontal,vertical
            default: 'horizontal'
        }
    },
    mounted() {

        //横向stack
        if (this.direction == 'horizontal') {

            var children = this.$el.childNodes
            var width = 0;
            this.height = $(children[0]).height() + 'px'
            for (var i = 0; i < children.length; i++) {
                if (children[i].nodeName != '#text') {
                    var item = $(children[i])
                    item.addClass(this.direction)
                    width += item.width()
                }
            }
            this.width = width + 'px'
        } else {
            var children = this.$el.childNodes
            var height = 0;
            this.width = $(children[0]).width() + 'px'
            for (var i = 0; i < children.length; i++) {
                if (children[i].nodeName != '#text') {
                    var item = $(children[i])
                    item.addClass(this.direction)
                    height += item.height()
                }
            }
            this.height = height + 'px'
        }

    }
}
</script>

<style scoped>
.horizontal {
    float: left;
}

.vertical {}
</style>

