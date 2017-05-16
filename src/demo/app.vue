<template>
  <div id="app">
    <transition :name="trans">
      <router-view></router-view>
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

.right-leave-active,
.right-enter-active {
  transition: all .3s ease
}

.right-enter,
.right-leave {
  opacity: 0
}


.right-leave-active {
  transform: translateX(480px);
  opacity: 0;
}

.left-enter,
.left-leave {
  opacity: 0
}

.left-leave-active,
.left-enter-active {
  transition: all .3s ease
}

.left-leave-active {
  transform: translateX(-480px);
  opacity: 0;
}
</style>