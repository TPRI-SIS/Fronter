<template>
    <div class="main">
        <gesture :swipeRight="swipeRight">
            <mu-appbar title="Title" class="appbar">
                <mu-icon-button icon="menu" slot="left" />
                <mu-flat-button label="expand_more" slot="right" />
                <mu-flat-button href="333" label="expand_more" slot="right" />
                <mu-icon-button icon="expand_more" slot="right" />
            </mu-appbar>
        </gesture>
    </div>
</template>

<script>
export default {
    name: 'dataStaticBaseData',
    data() {
        return {
            contentStyle: {
                height: $screen.height
            },
            swipeRight: function (e) {
                this.$router.go(-1)
            }
        }
    }
}
</script>

<style scoped>
.main {
    height: 100%;
}

.fade-enter {
    opacity: 0px
}

.appbar {
    position: absolute
}
</style>


