<template>
  <div class="mainDoc">
    <a-typography>
      <a-typography-title :level="2">创建页面</a-typography-title>
    </a-typography>
    <a-typography>
      <a-typography-paragraph>
        <span style="font-size: 16px">你可以在XinBuilder中新建一个页面，也可以通过搜索功能找到你想要设计的页面。</span>
        <div class="createPage1"></div>
        <a-divider />
        <span style="font-size: 16px">当你成功的建好了页面后，就可以对你的页面进行配置啦！在该平台下，主要是通过拖拽的方式，来生成节点。左侧是平台下支持的可拖拽的组件，中间是提供给组件放置的画布区，右侧是对组件属性配置的面板，你可以给根据自己的需求向画布区拖入你想要使用的组件</span>
        <div class="createPage2"></div>
        <a-divider />
        <span style="font-size: 16px">当然，在你拖入组件的时候，你会发现中间的画布区并没有占满全部屏幕，所以你可以通过将上方头部栏，左侧组件列表，右侧面板折叠起来。这样就可以让画布区充满整个屏幕了。</span>
        <div class="createPage3"></div>
        <a-divider />
        <span style="font-size: 16px">当你完成了页面的设计，就可以点击右上角的保存按钮。至此一个页面就开发完了</span>
      </a-typography-paragraph>
    </a-typography>
    <div>
      <a-button @click="() => {this.$router.push('/Xinbuilder/attributeConfig')}" size="large" style="float:right;height:80px" type="link">下一篇 配置属性</a-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>

<style scoped>
  .mainDoc{
    margin-right: 30px;
    font-size: 16px;
  }
  .createPage1{
    background-image: url('../images//createPage1.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .createPage2{
    background-image: url('../images//createPage2.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .createPage3{
    background-image: url('../images//createPage3.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
</style>