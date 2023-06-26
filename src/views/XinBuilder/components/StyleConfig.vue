<template>
  <div class="mainDoc">
    <a-typography>
      <a-typography-title :level="2">配置样式</a-typography-title>
    </a-typography>
    <a-typography>
      <a-typography-paragraph>
        <span style="font-size: 16px">在上一篇中，你学会了如何给组件配置属性，当然这种方式是比较简单的。即便没有开发经验也可以完成。但如果想要给组件的样式进行一些特殊的配置，就要给组件手动去编写<a target="_blank" href="https://www.w3school.com.cn/css/index.asp">CSS样式</a>。</span>
        <br />
        <span style="font-size: 16px">当然如果你不了解<a target="_blank" href="https://www.w3school.com.cn/css/index.asp">CSS样式</a>的编写，那么请查看相关文档去学习</span>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <span style="font-size: 16px">如果你已经了解了CSS是如何编写的，并不用掌握特别熟练也可以在该平台下使用。因为你不需要掌握选择器的用法，只需要记住每个样式是通过什么属性设置就可以了。我们依旧以按钮举例：</span>
        <br />
        <span style="font-size: 16px">右键组件，选择设置样式</span>
        <div class="styleConfig1"></div>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <span style="font-size: 16px">弹出的对话框，你可以在里面编写CSS样式，但是要满足编写规则，最外层要用一对{ }抱起来，里面的属性名和属性值要用""包起来,每对属性之间用逗号分隔</span>
        <br />
        <span style="font-size: 16px;font-weight: bold;">注意：一定是英文的双引号和逗号，不能是中文的</span>
        <div class="styleConfig2"></div>
        <a-divider />
      </a-typography-paragraph>
      <a-typography-paragraph>
        <span style="font-size: 16px;font-weight: bold">上面，我给这个按钮，设置了长100px，宽100px，背景颜色红色，边框3px并且是蓝色实线，按钮设置成圆形</span>
        <div class="styleConfig3"></div>
        <span style="font-size: 16px;">我们希望给使用者提供最灵活的方式去设置样式，但是并非满足所有的使用者，因为CSS的属性和属性值还是很多的，后续也会提供可视化的样式配置</span>
        <a-divider />
      </a-typography-paragraph>
    </a-typography>
    <div>
      <a-button size="large" style="float:right;height:80px" type="link">下一篇 配置样式</a-button>
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
  .styleConfig1{
    background-image: url('../images//styleConfig1.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .styleConfig2{
    background-image: url('../images//styleConfig2.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
  .styleConfig3{
    background-image: url('../images//styleConfig3.png');
    width: 600px;
    height: 300px;
    background-size: cover;
    margin-top: 10px;
  }
</style>