<template>
  <div>
  
    <div class="header">
      <p class="title">{{mainTitle}}</p>
    </div>
  
    <div v-bind:style='contentStyle' class="content">
  
    </div>
    <div class="footer">
      <scroll class="scroll" v-bind:options="scroll" :width="menu.width" :height="menu.height">
        <a v-for="(item, index) in list" v-bind:class="'menuItem '+item.selectClass">
          <div class="menuItemHeader">
            <span class="mu-icon material-icons icon" @click="openOrCloseSubMenu(index)">menu</span>
          </div>
          <div v-show="!item.showSubMenu" @click="openOrCloseSubMenu(index)">
            <i class="material-icons md-48 menuItemIcon">face</i>
            <p class="menuItemTitle">{{item.name}}</p>
          </div>
  
          <div class="subMenu" v-show="item.showSubMenu">
            <mu-list>
            <div v-for="subItem in item.subAppList">
              <mu-list-item titleClass="white"  :title="subItem.name" :to="subItem.router">
                <mu-icon class="icon" slot="right" value="label" />
              </mu-list-item>
              <mu-divider/>
            </div>
            </mu-list>
          </div>
  
        </a>

      </scroll>
    </div>
  </div>
</template>

<script>
import model from './model/navigate'


export default {
  name: 'navigate',
  data() {
    return {
      mainTitle: '华能集团实时监管系统',
      subTitle: 'b',
      list: model.appList,
      menu: {
        width: model.appList.length * 205 + model.appList.length + 'px',
        height: '229px',
      },
      contentStyle: {
        height: $screen.height - 45 + 'px',
        zIndex: -1
      },
      scroll: {
        scrollX: true,
        scrollY: false
      }
    }
  },
  methods: {
    openOrCloseSubMenu: function (index) {
      var m = this.list[index]
      if (m.showSubMenu == false) {
        m.showSubMenu = true
        m.selectClass = 'select-active'
        for (var i = 0; i < this.list.length; i++) {
          if (index != i) {
            this.list[i].showSubMenu = false
            this.list[i].selectClass = ''
          }
        }
      }
      else {
        m.showSubMenu = false
        m.selectClass = ''
      }

    }

  },

  mounted() {
    $ajax.ajax(
      '',
      c => {
        console.log(c)
      },
      d => {
        console.log(d)
      }
    )
  }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-size: 16px;
  margin-top: 12px;
  float: left;
  color: white!important;
}


.center {
  text-align: center;
}

.header {
  height: 45px;
  position: absolute;
  width: 100%;
}

.footer {
  width: 100%;
  height: 229px;
  bottom: 0px;
  position: fixed;
}

.content {
  position: absolute;
  width: 100%;
  background-image: url('./asset/bg.png');
  top: 45px;
}




.menuItem {
  float: left;
  color: white;
  height: 205px;
  width: 205px;
  background-color: #272E38;
  margin-left: 1px;
  margin-top:24px;
}

.icon {
  float: left;
  margin-top: 6px;
  margin-left: 6px;
  color: white;
}

.menuItemHeader {
  height: 20px;
}

.menuItemTitle {
  line-height: 0px;
  margin-top: 20px;
}

.menuItemIcon {
  margin-top: 60px;
  margin-left: -30px;
  font-size: 32px;
  width: 32px;
  height: 32px;
}

.subMenu {
  text-align: left!important;
}



.select-active {
  transition: all .3s ease;
}

.select-active {
  transform: translateY(-24px);
  background-color: #1976D2;
  box-shadow: 0px 0px 8px black;
}
</style>
