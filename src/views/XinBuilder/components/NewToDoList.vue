<template>
  <div class="mainDoc">
    <a-typography>
      <a-typography-title :level="2">使用Flex优化ToDoList</a-typography-title>
    </a-typography>
    <a-typography>
      <a-typography-paragraph>
        <span style="font-size: 16px">在之前的章节，我们实现了一个ToDoList，但是如果多次添加的话会出现位置不好确定的问题，那如果我们把所有的checkbox放在flex布局中，并且给flex布局设置样式</span>
        <pre>{
 "width":"100px",
 "height": "200px",
 "flexWrap":"wrap"
}</pre>
        <div class="newToDoList1"></div>
        <br />
        <span style="font-size:  16px">在左侧的数据中，你也可以看到flex和chenckbox之间的层级关系</span>
        <span style="font-size:  16px">如果你想要获取flex容器下的节点，你可以通过：</span>
        <pre>xinCtx.XinFlex455.childList[子节点]</pre>
        <span style="font-size:  16px">这种方式来获取，如果想获取所有的子节点就可以对childList进行遍历，不过注意的是childList是一个对象，可以通过Object.values方法获取</span>
        <pre>Object.values(xinCtx.XinFlex455.childList)</pre>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <span style="font-size: 16px">所以现在我们可以修改添加的方法：</span>
        <pre>
let node = xinComEvent.copyNode(xinCtx.XinFlex455.childList.XinCheckBox488);
node.comId += new Date().getTime();
node.attributeValue = xinCtx.XinInput517.attributeValue
//获取到flex容器下的子节点列表
let childList = JSON.parse(JSON.stringify(xinCtx.XinFlex455.childList));
//给子节点列表添加新的子节点
childList[node.comId] = node;
//重新赋值
xinCtx.XinFlex455.childList = childList</pre>
        <span style="font-size: 16px">面对数据量特别多的情况，我们可以给容器添加，多余内容以滚动条显示的样式：</span>
        <pre>overflow: scroll</pre>
      </a-typography-paragraph>
        <span style="font-size: 16px">提交方法，这里我直接alert所有选中的节点</span>
        <pre>let list = Object.values(xinCtx.XinFlex455.childList)
list = list.map(item => {
  if(item.checked){
    return item.attributeValue
  }
});
alert(list)</pre>
      <a-typography-paragraph>
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
  .newToDoList1{
    background-image: url('../images//newToDoList1.png');
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