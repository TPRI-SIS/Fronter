<template>
  <div>

    <mu-tabs class="tabs mu-paper-0" :value="activeTab" Default @change="handleTabChange">
      <mu-tab value="tab1" class="tabItem" title="应用"/>
      <mu-tab value="tab2" class="tabItem" title="游戏"/>
      <mu-tab value="tab3" class="tabItem" title="排行"/>
      <mu-tab value="tab4" class="tabItem" title="分类"/>
      <mu-tab value="tab5" class="tabItem" title="专享"/>
    </mu-tabs>


    <scroll class="scrollV" :style="{height:mainScrollHeight}" :options="scroll2" height="1200px" width="100%">
      <p class="title">装机必备</p>
      <p class="title sub">想要的都在这里</p>
      <stackLayout direction="vertical">
        <scroll class="scroll" :options="scroll" height="100px" width="1400px">
          <stackLayout>
            <div class="item green waves-effect">
              <div class="itemM green2">
                网易新闻
                <br/>
                <i class="material-icons md-48 menuItemIcon">face</i>
              </div>
              <p>安装</p>
            </div>
            <div class="item purple waves-effect">
              <div class="itemM purple2">
                光明大陆
                <br/>
                <i class="material-icons md-48 menuItemIcon">phone</i>
              </div>
              <p>安装</p>
            </div>
            <div class="item orange waves-effect">
              <div class="itemM orange2">
                墨迹天气
                <br/>
                <i class="material-icons md-48 menuItemIcon">android</i>
              </div>
              <p>安装</p>
            </div>
            <div class="item amber waves-effect">
              <div class="itemM amber2">
                王者荣耀
                <br/>
                <i class="material-icons md-48 menuItemIcon">info</i>
              </div>
              <p>安装</p>
            </div>
            <div class="item green waves-effect">
              <div class="itemM green2">
                网易新闻
                <br/>
                <i class="material-icons md-48 menuItemIcon">face</i>
              </div>
              <p>安装</p>
            </div>
            <div class="item purple waves-effect">
              <div class="itemM purple2">
                光明大陆
                <br/>
                <i class="material-icons md-48 menuItemIcon">phone</i>
              </div>
              <p>安装</p>
            </div>
            <div class="item orange waves-effect">
              <div class="itemM orange2">
                墨迹天气
                <br/>
                <i class="material-icons md-48 menuItemIcon">android</i>
              </div>
              <p>安装</p>
            </div>
            <div class="item amber waves-effect">
              <div class="itemM amber2">
                王者荣耀
                <br/>
                <i class="material-icons md-48 menuItemIcon">info</i>
              </div>
              <p>安装</p>
            </div>
            <div class="item green waves-effect">
              <div class="itemM green2">
                网易新闻
                <br/>
                <i class="material-icons md-48 menuItemIcon">face</i>
              </div>
              <p>安装</p>
            </div>
            <div class="item purple waves-effect">
              <div class="itemM purple2">
                光明大陆
                <br/>
                <i class="material-icons md-48 menuItemIcon">phone</i>
              </div>
              <p>安装</p>
            </div>
            <div class="item orange waves-effect">
              <div class="itemM orange2">
                墨迹天气
                <br/>
                <i class="material-icons md-48 menuItemIcon">android</i>
              </div>
              <p>安装</p>
            </div>
            <div class="item amber waves-effect">
              <div class="itemM amber2">
                王者荣耀
                <br/>
                <i class="material-icons md-48 menuItemIcon">info</i>
              </div>
              <p>安装</p>
            </div>
          </stackLayout>
        </scroll>
      </stackLayout>

      <p class="title">精品游戏</p>
      <p class="title sub">小编精选，不容错过</p>
      <stackLayout direction="vertical">
        <scroll class="scroll" :options="scroll" height="100px" width="1400px">
          <stackLayout>
            <div class="h red"/>
            <div class="h orange"/>
            <div class="h yellow"/>
            <div class="h green"/>
            <div class="h cyan"/>
            <div class="h blue"/>
            <div class="h purple"/>
          </stackLayout>
        </scroll>
      </stackLayout>

      <p class="title">休闲游戏</p>
      <p class="title sub">游戏爱好者的天堂</p>
      <stackLayout direction="vertical">
        <scroll class="scroll" :options="scroll" height="100px" width="1400px">
          <stackLayout>
            <div class="h red"/>
            <div class="h orange"/>
            <div class="h yellow"/>
            <div class="h green"/>
            <div class="h cyan"/>
            <div class="h blue"/>
            <div class="h purple"/>
          </stackLayout>
        </scroll>
      </stackLayout>


      <p class="title">蠢蠢欲动的春游->_-></p>
      <p class="title sub">游戏爱好者的天堂</p>
      <stackLayout direction="vertical">
        <scroll class="scroll" :options="scroll" height="100px" width="1400px">
          <stackLayout>
            <div class="h red"/>
            <div class="h orange"/>
            <div class="h yellow"/>
            <div class="h green"/>
            <div class="h cyan"/>
            <div class="h blue"/>
            <div class="h purple"/>
          </stackLayout>
        </scroll>
      </stackLayout>

      <p class="title">书中自有颜如玉</p>
      <p class="title sub">多读书，多看报；少吃零食，多睡觉</p>
      <stackLayout direction="vertical">
        <scroll class="scroll" :options="scroll" height="100px" width="1400px">
          <stackLayout>
            <div class="h red"/>
            <div class="h orange"/>
            <div class="h yellow"/>
            <div class="h green"/>
            <div class="h cyan"/>
            <div class="h blue"/>
            <div class="h purple"/>
          </stackLayout>
        </scroll>
      </stackLayout>
    </scroll>


  </div>
</template>

<script>
  export default {
    name: 'stackLayoutDemo',
    data() {
      return {
        activeTab: 'tab1',
        mainScrollHeight:$screen.height-64+'px',
        scroll: {
          scrollX: true,
          scrollY: false
        },
        scroll2: {
          scrollX: false,
          scrollY: true
        }
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      },
    }
  }
</script>

<style scoped>
  .tabs{
    position:absolute;
    top:0px;
    width:100%;
    background-color: white;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }

  .tabItem{
    color:black;
  }

  .title{
    display: block;
    text-align: left;
  }

  .sub{
    font-size: 12px;
    color:darkgray;
    line-height: 0px;
  }


  .scroll {
    /*position: absolute;*/
    top: 0px;
    width: 100%;
  }

  .scrollV {
    position: absolute;
    top: 64px;
    left:12px;
    width: calc(100% - 24px);
    height: 500px;
  }

  .h {
    width: 200px;
    height: 100px;
  }

  .item{
    height:100px;
    width:85px;
    border-radius: 2px;
    margin-right: 6px;
  }

  .itemM{
    height:70px;
    width: 100%;
    color:white;
    font-size: 12px;
    line-height: 24px;
  }

  .item p{
    line-height: 6px;
    color:white;
    font-size: 12px;
  }

  .item i{

    color:white;
    font-size: 36px;
  }




  .green{
    background-color: #8bc34a;
  }

  .green2{
    background-color: #9ccc65;
  }

  .purple{
    background-color: #9c27b0;
  }

  .purple2{
    background-color: #ab47bc;
  }

  .orange{
    background-color: #ff9800;
  }

  .orange2{
    background-color: #ffa726;
  }

  .amber{
    background-color: #ffc107;
  }

  .amber2{
    background-color: #ffca28;
  }
</style>
