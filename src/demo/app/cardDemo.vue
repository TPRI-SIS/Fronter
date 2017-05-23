<template>
    <div class="main">
        <gesture :swipeRight="back">
        <scroll :style="{height:scrollHeight}" height="1000px">
        <card class="card default" :style="{width:cardWidth}" :onRevealTrigger="triggerChart1">
            <div slot="title">实时负荷</div>
            <div slot="content">
                <p class="num">33MW</p>
            </div>
            <div slot="action">
                <mu-raised-button label="平均值"  />
                <mu-raised-button label="最大值"  />
            </div>
            <div slot="reveal" class="reveal"  >
                 <vueEchart :options="options1" :isInit="chart1Init"></vueEchart>
            </div> 

        </card>

         <card class="card deepPurple" :style="{width:cardWidth}">
            <div slot="title">卡片标题</div>
            <div slot="content">
                <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
            </div>
            <div slot="action">
                <mu-raised-button label="上一页"  />
                <mu-raised-button label="下一页"  />
            </div>
            <div slot="reveal" class="reveal">
                  <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
                      <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
                          <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
            </div> 

        </card>

         <card class="card blue" :style="{width:cardWidth}">
            <div slot="title">卡片标题</div>
            <div slot="content">
                <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
            </div>
            <div slot="action">
                <mu-raised-button label="上一页"  />
                <mu-raised-button label="下一页"  />
            </div>
            <div slot="reveal" class="reveal">
                  <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
                      <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
                          <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
            </div> 

        </card>

         <card class="card teal" :style="{width:cardWidth}">
            <div slot="title">卡片标题</div>
            <div slot="content">
                <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
            </div>
            <div slot="action">
                <mu-raised-button label="上一页"  />
                <mu-raised-button label="下一页"  />
            </div>
            <div slot="reveal" class="reveal">
                  <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
                      <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
                          <p>我是一个非常简单的卡片。 我善于包含小部分内容。 我很方便，因为我需要的标记很少。</p>
            </div> 

        </card>
        </scroll>
        </gesture>
    </div>
</template>

<script>


export default {
    data(){
        return{
            cardWidth:$screen.isPhone()?($screen.width-24+'px'):($screen.width/2-24+'px'),
            scrollHeight:$screen.height+'px',
            chart1Init:false,
             options1: {
                title: {
                    text: 'Vue---ECharts'
                },
                tooltip: {},
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }
        }
    },
    methods:{
        back:function(){
            this.$router.go(-1)
        },
        triggerChart1:function(e){
            if(e)
            this.chart1Init=true
        }
    },
    mounted(){

    }
}
</script>

<style scoped>
.num{
    font-size: 36px;
    padding-left: 48px;
    color:white;
}

.reveal{
    width:100%;
    height:100%;
}
.card{
    
    color:white;
    margin-left: 12px;
    margin-right: 12px;
    margin-top:6px;
    margin-bottom: 6px;
    float: left;
}

.default{
background-color: #546e7a; 
}

.deepPurple{
  background-color: #673ab7;
}

.blue{
    background-color: #2196f3;
}

.teal{
    background-color: #009688;
}

</style>
