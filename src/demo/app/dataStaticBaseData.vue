<template>

        <div class="main">
            <gesture :swipeRight="swipeRight"></gesture>
        </div>

</template>

<script>
export default {
    name: 'dataStaticBaseData',
    data() {
        return {
            contentStyle: {
                height: this.$screen.height
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
    background: red;
    height: 100%;
}

.fade-enter{
    opacity: 0px
}




</style>


