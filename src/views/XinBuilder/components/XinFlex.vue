<template>
  <div class="mainDoc">
    <a-typography>
      <a-typography-title :level="2">Flex布局容器</a-typography-title>
    </a-typography>
    <a-typography>
      <a-typography-paragraph>
        <span style="font-size: 16px">通过之前的学习，你已经可以完成基础的页面配置。这个时候你可能会考虑一个问题，如果只是从左侧拖拽，并不能实现出一个父子组件之间嵌套的结构。而基于这个问题，容器类型组件出现了。而本小节介绍的flex布局容器，也是设置了display:flex的一个父组件。你可以向画布区拖入一个Flex布局</span>
        <br />
        <div class="xinFlex1"></div>
        <span style="font-size:  16px">这个时候画布区只显示了一个蓝色的框，你可以将基础控件拖入这个框里面，这样就实现了一个父子组件嵌套的场景</span>
        <div class="xinFlex2"></div>
        <span style="font-size: 16px">像上面我在容器里面放了三个input框，但如果我想调整子组件的排列效果，就要给Flex容器设置CSS样式。比如这样：</span>
        <pre>{
  "width":"300px",
  "height":"200px",
  "flexWrap":"wrap",
  "border":"1px solid black"
}</pre>
        <div class="xinFlex3"></div>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <span style="font-size: 16px">如果你不熟悉flex布局，请上网查阅相关属性的配置</span>
      </a-typography-paragraph>
    </a-typography>
    <div>
      <a-button @click="() => {this.$router.push('/Xinbuilder/xinCtxData')}" size="large" style="float:right;height:80px" type="link">下一篇 使用Flex优化ToDoList</a-button>
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
  .xinFlex1{
    background-image: url('../images//xinFlex1.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .xinFlex2{
    background-image: url('../images//xinFlex2.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .xinFlex3{
    background-image: url('../images//xinFlex3.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .toDoList3{
    background-image: url('../images//toDoList3.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
</style>