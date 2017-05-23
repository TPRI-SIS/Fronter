<template>
    <div class="main">
        <gesture :swipeRight="swipeRight">
             <scroll :options='scrollOptions' :style="{height:scrollHeight}" class="content" :width="scrollStyle.width" >
                 <div class="bigTitle">火电风电</div>
                 <collectionLayout :cols="3" :style="{height:'350px',position:'relative'}">
                    <a v-for="tile, index in listOne" :key="index">
                        <div style="height:63px;position:absolute;width:100%;top:calc((100% - 63px)/2);">
                        <mu-icon :value="tile.icon" :size="36" :color="tile.color" />
                        <span style="color:black;display:inherit;">{{tile.title}}</span>
                        </div>
                    </a>
                </collectionLayout>
                <div class="bigTitle">清洁能源</div>
                <collectionLayout :cols="3" :style="{height:'350px',position:'relative'}">
                    <a v-for="tile, index in listOne" :key="index">
                    <div style="height:63px;position:absolute;width:100%;top:calc((100% - 63px)/2);">                   
                        <mu-icon :value="tile.icon" :size="36" :color="tile.color" />
                        <span style="color:black;display:inherit;">{{tile.title}}</span>
                     </div>    
                    </a>
                </collectionLayout>                 
                    
            </scroll>       

        </gesture>
    </div>
</template>


<script>
    export default {
        name: 'gridList',
        data() {
            return {
                scrollHeight: $screen.height + 'px',
                scrollStyle: {
                    width: $screen.width + 'px',
                    height: '2000px'
                },
                contentStyle: {
                    height: $screen.height,
                    width:$screen.width
                },
                scrollOptions: {
                    scrollX: false,
                    scrollY: true
                },
                swipeRight: function(e) {
                    this.$router.go(-1)
                },
                listOne: [{
                    title: '组织机构',
                    icon: 'home',
                    color: 'red'
                }, {
                    title: '发电功率',
                    icon: 'flight_takeoff',
                    color: 'blue'
                }, {
                    title: '发电负荷',
                    icon: 'cloud_download',
                    color: 'green'
                }, {
                    title: '机组效率',
                    icon: 'videogame_asset',
                    color: '#EE175A'
                }, {
                    title: '实时负荷',
                    icon: 'android',
                    color: '#17D7EE'
                }, {
                    title: '报警查询',
                    icon: 'grade',
                    color: '#5AEF17'
                }, {
                    title: '图形分析',
                    icon: 'home',
                    color: '#7F2F0E'
                }]
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .main {
        height: 100%;
    }
    .bigTitle{
        background-color:rgba(160, 160, 160, 0.2);
        text-align: left;
        padding:5px
    }
</style>
<style>
    .titleBar {
        display: none!important;
    }
</style>