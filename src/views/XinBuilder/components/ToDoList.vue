<template>
  <div class="mainDoc">
    <a-typography>
      <a-typography-title :level="2">实现ToDoList页面</a-typography-title>
    </a-typography>
    <a-typography>
      <a-typography-paragraph>
        <span style="font-size: 16px">如果你是一个前端开发人员或者你正在学习前端知识，那么你一定会对ToDoList这个例子比较熟悉。因为它作为初学者来说，是一个简单而又能考察html，css，js的非常实用的页面。那如果不用传统的JS+HTML+CSS编写，而是在该平台下完成。过程也是非常简单的，这一小节，就是带你一起实现一个ToDoList页面。先看一下要实现的效果是什么样子：</span>
        <br />
        <div class="toDoList1"></div>
        <span style="font-size:  16px">当我在输入框输入内容（例如咖啡）后，点击添加，想要在香蕉苹果下面新增一个咖啡的checkbox。当我点击提交的时候，会在最上面将选中的checkbox内容展示出来。我们一步步来，先确定好该页面是由什么组件组成的。</span>
        <div class="toDoList2"></div>
        <span style="font-size: 16px">可以看出来，构成页面只需要四个组件。标签用来在上方展示内容，按钮用来触发事件，输入框用来输入内容，还有一个图标展示</span>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <span style="font-size: 16px">图标是怎么进行配置成删除的呢？这个问题我们会在后面单独有一章节去介绍图标组件，而在这里你可以将图标类型的值设置成DeleteOutlined即可。</span>
        <div class="toDoList3"></div>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <span style="font-size: 16px">下一步我们实现点击添加按钮，实现增加List的一项功能。这里先提供一个思路，如果我能点击按钮后，复制一个checkbox组件，修改它的样式中top值，以及id和name。放在xinCtx中，是不是就可以了呢？</span>
        <br />
        <span style="font-size: 16px">全局对象xinComEvent提供了copyNode方法可以复制一个节点</span>
        <pre>let node = xinComEvent.copyNode(xinCtx.XinCheckBox495); //创建一个checkbox的复制节点
node.comId += new Date().getTime(); //修改节点的id
node.style.top = parseInt(node.style.top) + 110 + 'px'; //修改节点的top属性（位置）
node.attributeValue = xinCtx.XinInput538.attributeValue //修改节点的值，应该为输入框输入的内容，通过xinCtx获取
xinCtx[node.comId] = node; //在全局中添加node节点</pre>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <span style="font-size: 16px">提交的点击事件应该怎么写呢？我们可以遍历所有的checkbox。找到所有已选中的checkbox。将其值给到标签，这样就完成了</span>
        <pre>// 拿到所有的checkbox
let arr = Object.keys(xinCtx).map(item => {
    if(xinCtx[item].comType === 'XinCheckBox'){
        return xinCtx[item]
    }
})
//找到checked为true的checkbox
let result = arr.filter(item => item?.checked === true);
//赋值给标签
xinCtx.XinLable514.attributeValue = result.map(item => item.attributeValue).toString();</pre>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <p style="font-size: 16px">上面虽然已经完成了，但是有没有什么问题呢？</p>
        <p style="font-size: 16px">如果添加两个checkbox，二者的位置怎么确定呢？会不会重叠？</p>
        <p style="font-size: 16px">请带着这个问题继续看下一个章节</p>
        <div class="attributeConfig2"></div>
        <a-divider />
      </a-typography-paragraph>
    </a-typography>
    <div>
      <a-button @click="() => {this.$router.push('/Xinbuilder/xinFlex')}" size="large" style="float:right;height:80px" type="link">下一篇 Flex布局容器</a-button>
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
  .toDoList1{
    background-image: url('../images//toDoList1.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .toDoList2{
    background-image: url('../images//toDoList2.png');
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