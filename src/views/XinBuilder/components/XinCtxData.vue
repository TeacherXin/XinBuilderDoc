<template>
  <div class="mainDoc">
    <a-typography>
      <a-typography-title :level="2">模型对象xinCtx</a-typography-title>
    </a-typography>
    <a-typography>
      <a-typography-paragraph>
        <span style="font-size: 16px">到这里，你应该已经对CSS和JS有了基本的了解。并且学会了如何在XinBuilder中对组件的样式和动作进行配置。但这并不能帮助你完成一个功能比较完善的页面，在介绍xinCtx之前，我们先预想一个场景。有一个单选框和按钮，而单选框的状态会跟着按钮的点击改变。当然我们首先要做的就是要给按钮绑定动作，但如何在JS代码中去获取单选框的状态呢？</span>
        <br />
        <div class="xinCtxData1"></div>
        <span style="font-size:  16px">这个时候就要用到模型对象xinCtx了，你可以右键单选框，设置属性，在属性面板的上面找到单选框的唯一标识ID</span>
        <div class="xinCtxData2"></div>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <span style="font-size: 16px">右键按钮，选择设置动作，打开动作弹窗</span>
        <div class="xinCtxData3"></div>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <span style="font-size: 16px">在动作面板中，你可以通过<span style="font-weight:bold">xinCtx.</span>的方式,获取到你页面中的任何一个组件（父子组件的嵌套后续会在其他章节说明）的状态。这段代码的意思就是对Radio组件的选中状态进行置反</span>
        <pre>xinCtx.XinRadio442.checked = !xinCtx.XinRadio442.checked</pre>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <span style="font-size: 16px">当然你可能还有一个疑惑，如何获取组件的状态值呢？其实每个组件的每个属性都对应着组件的一个状态值。例如Radio是否选中的状态值为checked。我们可以通过查看左侧数据中，对应组件的JSON，就可以看到组件的属性值了</span>
        <div class="xinCtxData4"></div>
        <div class="xinCtxData5"></div>
        <a-divider />
      </a-typography-paragraph>
    </a-typography>
    <div>
      <a-button @click="() => {this.$router.push('/Xinbuilder/toDoList')}" size="large" style="float:right;height:80px" type="link">下一篇 实现ToDoList</a-button>
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
  .xinCtxData1{
    background-image: url('../images//xinCtxData1.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .xinCtxData2{
    background-image: url('../images//xinCtxData2.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .xinCtxData3{
    background-image: url('../images//xinCtxData3.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .xinCtxData4{
    background-image: url('../images//xinCtxData4.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .xinCtxData5{
    background-image: url('../images//xinCtxData5.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
</style>