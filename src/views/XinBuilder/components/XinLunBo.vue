<template>
  <div class="mainDoc">
    <a-typography>
      <a-typography-title :level="2">轮播图组件</a-typography-title>
    </a-typography>
    <a-typography>
      <a-typography-paragraph>
        <span style="font-size: 16px">如果你浏览过淘宝或者一些小程序，你会发现轮播图是一个很常见的组件。这一小节，主要是教你如何使用轮播图组件。当然你需要向画布区拖入一个轮播图</span>
        <br />
        <div class="xinLunBo1"></div>
        <span style="font-size:  16px">而轮播图作为一个容器组件，也是要在里面拖入子组件的。而轮播图主要接受的子组件为div，我给轮播图设置好样式，然后再拖入四个div</span>
        <pre>{
 "border":"1px solid blue",
 "width": "600px",
 "height":"200px"
}</pre>
        <div class="xinLunBo2"></div>
        <span style="font-size: 16px">现在给这些div设置不同的背景颜色，这样一个简单的轮播图就配置好了，当然你也可以选择给div添加背景图片</span>
        <pre>{
 "width":"600px",
 "height":"200px",
 "background":"red"
}</pre>
        <a-divider />
      </a-typography-paragraph>
    </a-typography>
    <div>
      <a-button @click="() => {this.$router.push('/Xinbuilder/xinForm')}" size="large" style="float:right;height:80px" type="link">下一篇 Form表单</a-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .mainDoc{
    margin-right: 30px;
    font-size: 16px;
  }
  .xinLunBo1{
    background-image: url('../images//xinLunBo1.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .xinLunBo2{
    background-image: url('../images//xinLunBo2.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
</style>