<template>
  <div class="mainDoc">
    <a-typography>
      <a-typography-title :level="2">Table表格组件</a-typography-title>
    </a-typography>
    <a-typography>
      <a-typography-paragraph>
        <span style="font-size: 16px">表格作为一个非常常用的组件，在XinBuilder中也是支持该组件的配置。该小节主要是对表格组件进行介绍，我们在画布区拖入一个表格，并且设置400px的宽度</span>
        <br />
        <div class="xinTable1"></div>
        <span style="font-size:  16px">对于表格来说，最重要的两个属性就是colums（表格标题）和data（表格数据）的设置，而本章节主要就是介绍这两部分内容的配置，首先是表格标题的配置，我们右键表格，选择设置表头：</span>
        <div class="xinTable2"></div>
        <span style="font-size: 16px">这个时候我们需要在设置表头里面的弹窗进行配置，这里需要注意的是，key值必须是惟一的，这在我们后续操作表格内容的时候非常重要</span>
        <div class="xinTable3"></div>
        <span style="font-size: 16px">下一步我们去配置表格数据，点击设置内容，这里只需要在对应的标题下填上对应的数据，同样也要保证key唯一</span>
        <div class="xinTable4"></div>
        <span style="font-size: 16px">这样对于我们来说，一个简单的表格就配置好了</span>
        <div class="xinTable5"></div>
        <a-divider />
      </a-typography-paragraph>
    </a-typography>
    <div>
      <a-button @click="() => {this.$router.push('/Xinbuilder/xinForm')}" size="large" style="float:right;height:80px" type="link">下一篇 Table + Form实现简单的数据存储</a-button>
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
  .xinTable1{
    background-image: url('../images//xinTable1.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .xinTable2{
    background-image: url('../images//xinTable2.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .xinTable3{
    background-image: url('../images//xinTable3.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .xinTable4{
    background-image: url('../images//xinTable4.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .xinTable5{
    background-image: url('../images//xinTable5.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
</style>