<template>
  <navLayout :open="open" :trigger="handleTrigger">
    <div slot="nav">
      <mu-appbar title="功能列表" class="appBar">  
      </mu-appbar>
      <scroll class="scroll" :style='{height:scrollHeight}' :height='(list.length+2)*48+"px"'>
        <mu-list>
          <mu-list-item v-for="item in list" :title="item.name" class="item" @click="changeContent(item.name)">
          </mu-list-item>
        </mu-list>
      </scroll>
    </div>
    <div class="content" slot="content">
      <mu-appbar :title="contentTitle" class="appBar">
        <mu-icon-button icon="arrow_back_ios" slot="left" @click='back' />
        <mu-icon-button icon="expand_more" ref="button" slot="right" @click="toggle"/>
       
      </mu-appbar>
       <mu-popover :trigger="menuTrigger" :open="menuOpen" @close="handleClose">
          <mu-menu>
            <mu-menu-item title="选择1" @click="showToast"/>
            <mu-menu-item title="选择2" />
            <mu-menu-item title="选择3" />
            <mu-menu-item title="选择4" />
            <mu-menu-item title="选择5" />
          </mu-menu>
        </mu-popover>
      <div class="appContent">
        <p>{{contentTitle}}</p>
      </div>
      <mu-toast v-if="toast" message="一段简单的文本" />
    </div>
  </navLayout>
</template>
<script>

var l = []
for (var i = 0; i < 33; i++) {
  var item = { name: '应用功能' + i }
  l.push(item)
}

export default {
  name: 'navLayoutDemo',
  data() {
    return {
      open: false,
      contentTitle: '',
      scrollHeight: $screen.height + 'px',
      list: l,
      menuOpen: false,
      menuTrigger: null,
      toast:false
    }
  },
  watch: {
    open: function (value) {
      console.log(value)
    }
  },
  methods: {
    handleTrigger: function (e) {

    },
    back: function () {
      this.$router.go(-1)
    },
    changeContent: function (e) {
      this.contentTitle = e
    },
    showToast:function(){
      this.toast=true
      var vm=this
      setTimeout(() => { vm.toast = false }, 2000)
    },
    toggle () {
      this.menuOpen = !this.open
    },
    handleClose (e) {
      this.menuOpen = false
    }
  },
   mounted () {
    this.menuTrigger = this.$refs.button.$el
  },
  activated() {
    //当窗口激活时加载数据
  },
  deactivated() {
    //当窗口为非激活时做一些东西，例如停止计时器之类
  }
}
</script>

<style scoped>
.appBar {
  position: absolute;
  width: 100%;
}

.appContent {
  position: absolute;
  width: 100%;
  top: 64px;
}

.scroll{
  padding-top:64px;
}

.item {
  text-align: left;
  padding-left: 48px;
}

.main {
  height: 100%;
}

.content {
  height: 100%;
}
</style>


