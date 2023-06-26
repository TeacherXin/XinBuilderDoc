<template>
  <div class="mainDoc">
    <a-typography>
      <a-typography-title :level="2">配置事件</a-typography-title>
    </a-typography>
    <a-typography>
      <a-typography-paragraph>
        <span style="font-size: 16px">通过前面的讲解，你已经可以完成一个页面的基本配置了。但是页面还缺少一个东西，就是交互。也就是说在按钮点击后要触发什么，输入框输入后要触发什么。而这一篇，主要就是通过动作配置，来给页面加上交互效果</span>
        <br />
        <span style="font-size: 16px">但是如果想要使用动作这个功能，你就要了解<a target="_blank" href="https://www.w3school.com.cn/js/index.asp">JS代码</a>的编写，如果你对这方面还比较薄弱或者不清楚，请先学习<a target="_blank" href="https://www.w3school.com.cn/js/index.asp">JavaScript文档</a>。</span>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <span style="font-size: 16px">如果你已经对JS有基本的了解，那么你就可以开始在该平台下编写JS代码了，我们依旧以按钮举例：</span>
        <br />
        <span style="font-size: 16px">你可以右键组件，选择设置动作，由于按钮只有点击事件，选中onClick事件打开动作弹窗</span>
        <div class="actionConfig1"></div>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <span style="font-size: 16px">在对话框中，你可以写JS代码，当然要满足JS的规范，同时你也可以使用XinCtx全局对象来获取其他组件的属性信息，来实现组件的交互（XinCtx这部分会在下一个章节进行讲解）</span>
        <div class="actionConfig2"></div>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <pre>const value = Math.random() * 10;
xinCtx.XinButton479.attributeValue = value;</pre>
        <span style="font-size: 16px">上面的例子是通过Math.random获取一个随机数，然后将按钮上的文字设置为该随机数。也就是按钮每次点击后，按钮上的文字会变成一个随机数</span>
        <a-divider />
      </a-typography-paragraph>
    </a-typography>
    <div>
      <a-button @click="() => {this.$router.push('/Xinbuilder/styleConfig')}" size="large" style="float:right;height:80px" type="link">下一篇 配置样式</a-button>
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
  .actionConfig1{
    background-image: url('../images//actionConfig1.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .actionConfig2{
    background-image: url('../images//actionConfig2.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
</style>