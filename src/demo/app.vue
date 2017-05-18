<template>
  <div id="app">
    <transition :name="trans">
        <keep-alive>
      <router-view></router-view>
        </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      trans: 'left'
    }
  },
  watch: {
    '$route'(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      if (toDepth == fromDepth)
        this.trans = 'fade'
      else
        this.trans = toDepth < fromDepth ? 'right' : 'left'

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>