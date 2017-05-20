<template>
    <div>
        <pageLayout class="page" :index="index" height="400px" :width="width" :indexChange="indexChange">
            <div class="h red" :style="{width:unitWidth}" />
            <div class="h orange" :style="{width:unitWidth}" />
            <div class="h yellow" :style="{width:unitWidth}" />
            <div class="h green" :style="{width:unitWidth}" />
            <div class="h cyan" :style="{width:unitWidth}" />
            <div class="h blue" :style="{width:unitWidth}" />
            <div class="h purple" :style="{width:unitWidth}" />
        </pageLayout>
        <gesture :swipeRight="swipeRight">
            <div class="shower">
                <h1>
                    {{'当前页：'+index}}
                </h1>
                <mu-raised-button label="上一页" @click="back" />
                <mu-raised-button label="下一页" @click="next" />
            </div>
        </gesture>
    </div>
</template>

<script>
export default {
    name: 'pageLayoutDemo',
    data() {
        return {
            width: $screen.width * 7 + 'px',
            unitWidth: $screen.width + 'px',
            index: 0
        }
    },
    methods: {
        indexChange: function (e) {
            this.index = e
        },
        next: function () {
            if (this.index < 6)
                this.index++
        },
        back: function () {
            if (this.index != 0)
                this.index--
        }, swipeRight: function () {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.page {
    position: absolute;
    width: 100%;
    top: 0px;
}

.shower {
    position: absolute;
    top: 424px;
}


.h {
    height: 400px;
    float: left;
}

.red {

    background-color: red;
}

.orange {
    background-color: orange;
}

.yellow {
    background-color: yellow;
}

.green {
    background-color: green;
}

.cyan {
    background-color: cyan;
}

.blue {
    background-color: blue;
}

.purple {
    background-color: purple;
}
</style>
