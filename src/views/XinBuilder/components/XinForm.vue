<template>
  <div class="mainDoc">
    <a-typography>
      <a-typography-title :level="2">Form表单组件</a-typography-title>
    </a-typography>
    <a-typography>
      <a-typography-paragraph>
        <span style="font-size: 16px">当你需要使用非常多输入框等类型的组件，那么Form表单是一个不错的选择，你可以用表单容器对大量的Input进行管理，使用起来也是很简单，只需要拖入一个Form表单组件：</span>
        <br />
        <div class="xinForm1"></div>
        <span style="font-size:  16px">再向Form容器下拖入你想要使用的基础控件，而在Form表单下的基础控件具有三个特别的属性配置，分别是：标签，必填和必填提示</span>
        <div class="xinForm2"></div>
        <span style="font-size: 16px">同时你可以给Form表单设置一些属性来控制所有基础控件的睡醒，例如组件大小，隐藏，禁用</span>
        <div class="xinForm3"></div>
        <a-divider />
      </a-typography-paragraph>
    </a-typography>
    <div>
      <a-button @click="() => {this.$router.push('/Xinbuilder/xinTable')}" size="large" style="float:right;height:80px" type="link">下一篇 Table表格</a-button>
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
  .xinForm1{
    background-image: url('../images//xinForm1.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .xinForm2{
    background-image: url('../images//xinForm2.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .xinForm3{
    background-image: url('../images//xinForm3.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
</style>