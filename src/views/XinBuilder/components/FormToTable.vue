<template>
  <div class="mainDoc">
    <a-typography>
      <a-typography-title :level="2">Table + Form</a-typography-title>
    </a-typography>
    <a-typography>
      <a-typography-paragraph>
        <span style="font-size: 16px">现在你已经知道了Form组件和Table组件的使用，现在我们实现一个简单的需求，在Form表单中输入内容，提交后将内容同步到表格中。</span>
        <br />
        <span style="font-size:  16px">先在画布区拖入一个Form表单，然后再拖入三个输入框设置好标签，必填属性。同时给Form表单设置样式：</span>
        <pre>{
 "border":"none"
}</pre>
        <div class="formToTable1"></div>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <span style="font-size: 16px">完成后再在画布区拖入一个表格，对表头进行配置，并且添加一条数据。同时设置表格的宽度为600px</span>
        <pre>{
 "width":"600px"
}</pre>
        <br />
        <div class="formToTable2"></div>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <span style="font-size: 16px">之后我们就要配置事件了，首先在Form表单下面拖入一个按钮组件，我们希望的是，在输入框输入内容后，将内容添加到表格之中，所以我们要先获取输入框的内容，通过之前的学习，你应该已经知道要通过xinCtx拿到组件的值：</span>
        <pre>const name = xinCtx.XinForm344.childList.XinInput416.attributeValue; //姓名
const sex = xinCtx.XinForm344.childList.XinInput383.attributeValue; //性别
const age = xinCtx.XinForm344.childList.XinNumber350.attributeValue; //年龄</pre>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <span style="font-size: 16px">下一步我们要看一下，表格中的数据是怎么存储的。我们需要打开左侧数据的JSON弹窗，看一下表格里的JSON是什么样的，从这里面我们可以知道表格数据存储的数据结构：</span>
        <br />
        <span style="font-size: 16px">下一步我们只需要获取到表格的tableData，并且将刚才通过xinCtx获取到的数据，补充到里面就可以了</span>
        <div class="formToTable3"></div>
        <pre>const tableData = JSON.parse(JSON.stringify(xinCtx.XinTable480.tableData)); //拿到表格的tableData
tableData.push({name,age,sex,key:name}); //添加刚才从xinCtx中获取的数据
xinCtx.XinTable480.tableData = tableData; //对表格的tableData重新赋值</pre>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <span style="font-size: 16px">最后我们添加一下判断是否为空的处理，整体就完成了</span>
        <pre>const name = xinCtx.XinForm344.childList.XinInput416.attributeValue;
const sex = xinCtx.XinForm344.childList.XinInput383.attributeValue;
const age = xinCtx.XinForm344.childList.XinNumber350.attributeValue;
if(name && sex && age){
 const tableData = JSON.parse(JSON.stringify(xinCtx.XinTable480.tableData));
  tableData.push({name,age,sex,key:name});
  xinCtx.XinTable480.tableData = tableData;
  xinCtx.XinForm344.childList.XinInput416.attributeValue = '';
  xinCtx.XinForm344.childList.XinInput383.attributeValue = '';
  xinCtx.XinForm344.childList.XinNumber350.attributeValue = '';
  
}else{
  alert('请输入正确值')
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
  .formToTable1{
    background-image: url('../images//formToTable1.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .formToTable2{
    background-image: url('../images//formToTable2.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .formToTable3{
    background-image: url('../images//formToTable3.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
</style>