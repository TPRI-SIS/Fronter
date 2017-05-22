<template>
    <div class="main">
        <card class="card">
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
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {


}
.card{
    background-color: #546e7a; 
    color:white;
    margin: 12px;
}

</style>
