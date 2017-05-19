<template>
    <div>
        <scroll class="scroll" :options="scroll" height="100px" width="1400px">
            <stackLayout>
                <div class="h red" />
                <div class="h orange" />
                <div class="h yellow" />
                <div class="h green" />
                <div class="h cyan" />
                <div class="h blue" />
                <div class="h purple" />
            </stackLayout>
        </scroll>
    
        <scroll class="scroll2" :options="scroll2"  height="700px" width="200px">
            <stackLayout direction="vertical">
                <div class="h red" />
                <div class="h orange" />
                <div class="h yellow" />
                <div class="h green" />
                <div class="h cyan" />
                <div class="h blue" />
                <div class="h purple" />
            </stackLayout>
        </scroll>
    </div>
</template>

<script>
export default {
    name: 'stackLayoutDemo',
    data() {
        return {
            scroll: {
                scrollX: true,
                scrollY: false
            },
            scroll2: {
                scrollX: false,
                scrollY: true
            }
        }
    }
}
</script>

<style scoped>
.scroll {
    position: absolute;
    top: 0px;
    width: 100%;
}

.scroll2 {
    position: absolute;
    top: 100px;
    width: 200px;
    height: 500px;
}

.h {
    width: 200px;
    height: 100px;
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
