<template>
  <transition name="slide-left">
  
    <div class="navigate">

    <gesture style="height:300px"></gesture>
      
    <div class="content">
       <img src="./asset/bg.png">
    </div>
      <scroll v-bind:options="scroll">
        <div v-bind:style="menuStyle">
  
          <div  v-for="(item, index) in list" v-bind:class="'menuItem '+item.selectClass">
          
            <div class="menuItemHeader">
               
              <span class="mu-icon material-icons icon" @click="openOrCloseSubMenu(index)">menu</span>
            
            </div>
            <transition name="slide-fade">
              <div v-show="!item.showSubMenu" @click="openOrCloseSubMenu(index)">
                <i class="material-icons md-48 menuItemIcon">face</i>
                <p class="menuItemTitle">{{item.name}}</p>
              </div>
             
            </transition>
             <div class="subMenu" v-show="item.showSubMenu">

              <mu-list>
                <mu-list-item v-for="subItem in item.subAppList" :title="subItem.name" :to="subItem.router">
                  <mu-icon  class="icon" slot="right" value="label" />
                </mu-list-item>
              </mu-list>
            </div>
         
          </div>
     
        </div>
      </scroll>
    </div>
  </transition>
</template>

<script>
import model from './model/navigate'


export default {
  name: 'navigate',
  data() {
    return {
      mainTitle: 'a',
      subTitle: 'b',
      list: model.appList,
      menuStyle: {
        width: model.appList.length * 205 + 'px',
        height: '205px',
        position: 'fixed',
        bottom: 0,
        left: 0
      },
      scroll:{
                mouseWheel: false,
                click: true,
                preventDefault: true,
                tap: true,
                bounce: true,
                disableTouch: false,
                scrollX:true,
                scrollY:false
      }
    }
  },
  methods: {
    openOrCloseSubMenu: function (index) {
      var m=this.list[index]
      if(m.showSubMenu==false){
        m.showSubMenu=true
        m.selectClass='select-active'
         for(var i=0;i<this.list.length;i++){
          if(index!=i)
          {
            this.list[i].showSubMenu=false
            this.list[i].selectClass=''
          }
        }
      } 
      else{
        m.showSubMenu=false
        m.selectClass=''
      }

    }

  },
  mounted(){
    this.$ajax.ajax(
      '',
      c=>
      {
        console.log(c)
        },
        d=>
        {
          console.log(d)
        }
      )
  }
  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titleLeft {
  text-align: left !important;
}

.center {
  text-align: center;
}

.header {
  height: 32px;
}

.content {
  height: 800px;
  background-color: red;
}

.footer {
  margin-bottom: 0px;
}


.menuItem {
  float: left;
  color: white;
  height: 205px;
  width: 205px;
  background-color: #272E38;
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

.menuItemIcon{
     margin-top: 60px;
   margin-left: -30px;
   font-size: 32px;
   width: 32px;
   height: 32px;
}

.subMenu {
  text-align: left!important;
}




h1 {
  font-size: 5.125rem;
  color: white;
  margin-top: 100px!important;
}

h2 {
  font-size: 3.125rem;
  color: white;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .3s ease;
}

.slide-fade-enter,
.slide-fade-leave-active {
  transform: scale(0,0);
  opacity: 0;
}

.select-active{
  transition: all .3s ease;
  
}

.select-active{
   transform: translateY(-24px);
background-color: #1976D2;
box-shadow:0px 0px 8px black;
}

</style>
