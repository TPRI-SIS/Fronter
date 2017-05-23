<template>
    <div class="main">
        <div id="cardTitle" v-show="showTitle" class="title">
            <slot name="title"></slot>
        </div>
        <div id="cardContent" v-show="showContent" class="content">
            <slot name="content"></slot>
            <mu-float-button v-show="showReveal" icon="add" mini class="demo-float-button revealBtn" @click="triggerReveal" />
        </div>
    
        <div id="cardAction" v-show="showAction" class="action">
            <slot name="action"></slot>
        </div>
    
        <transition name="reveal">
            <div id="cardReveal" v-show="openReveal" class="reveal">
                <div class="revealCloseDiv">
                   <i class="material-icons md-32 menuItemIcon revealCloseBtn " @click="triggerReveal">close</i>
                </div>
                <slot name="reveal"></slot>
             
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'card',
    data() {
        return {
            showTitle: true,
            showContent: true,
            showAction: true,
            showReveal: true,
            openReveal: true
        }
    },
    methods: {
        triggerReveal: function () {
            this.openReveal = this.openReveal ? false : true
        }
    },
    mounted() {
        this.showTitle = $('#cardTitle').html() == '' ? false : true
        this.showContent = $('#cardContent').children().length < 2 ? false : true
        this.showAction = $('#cardAction').html() == '' ? false : true
        this.showReveal = $('#cardReveal').children().length < 2 ? false : true

    }
}
</script>

<style scoped>
.main {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    overflow: hidden;
    position: relative;
}

.title {
    display: block;
    font-size: 24px;
    font-weight: 300;
    padding-top: 24px;
    padding-left: 24px;
    padding-right: 24px;
    text-align: left;
}

.content {
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 12px;
    text-align: left;
    position: relative;
}

.action {
    border-top: 1px solid rgba(160, 160, 160, 0.2);
    padding-top: 12px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    text-align: left;
}

.reveal {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    top: 0px;
    background: white;
    color:black;

}

.revealCloseDiv {

width: 100%;
height: 24px;

}

.revealCloseBtn{
    float: right;
}

.revealBtn {
    position: absolute;
    right: 24px;
    bottom: -20px;
}
</style>
