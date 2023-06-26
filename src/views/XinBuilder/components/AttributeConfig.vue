<template>
  <div class="mainDoc">
    <a-typography>
      <a-typography-title :level="2">配置属性</a-typography-title>
    </a-typography>
    <a-typography>
      <a-typography-paragraph>
        <span style="font-size: 16px">当你开始设计更完善的页面时，就要对组件进行一些独特的改变。例如改变组件的大小，颜色，某些状态。而这一小篇，主要介绍如何更改组件的一些特有的属性，并且对一些比较常见的属性做出解释。</span>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <span style="font-size: 16px">当你拖入组件后，可以鼠标右键点击组件。选择属性配置，这时候右侧就会出现该组件属性的可视化配置。我们用按钮举例：</span>
        <div class="attributeConfig1"></div>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <p style="font-size: 16px"><span style="font-weight:bold">属性值</span>：设置按钮上的文字</p>
        <p style="font-size: 16px"><span style="font-weight:bold">隐藏：</span>设置按钮是否显示</p>
        <p style="font-size: 16px"><span style="font-weight:bold">按钮类型：</span>设置按钮的显示类型</p>
        <p style="font-size: 16px"><span style="font-weight:bold">按钮类型：</span>设置按钮的显示类型</p>
        <p style="font-size: 16px"><span style="font-weight:bold">组件大小：</span>设置按钮的大小</p>
        <p style="font-size: 16px"><span style="font-weight:bold">禁用：</span>设置按钮是否禁用</p>
        <p style="font-size: 16px"><span style="font-weight:bold">危险按钮：</span>设置按钮是否为危险按钮</p>
        <p style="font-size: 16px"><span style="font-weight:bold">幽灵按钮：</span>设置按钮是否为幽灵按钮</p>
        <div class="attributeConfig2"></div>
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
  .attributeConfig1{
    background-image: url('../images//attributeConfig1.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .attributeConfig2{
    background-image: url('../images//attributeConfig2.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
</style>