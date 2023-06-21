<template>
  <div class="header">
    <div class="title">XinBuilder中文文档</div>
    <div class="XinBuilder">
      <a-button @click="this.toBuilderDoc" size="middle" type="link">页面设计</a-button>
      <a-button size="middle" type="link">组件设计</a-button>
      <a-button size="middle" type="link">语言</a-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods: {
    toBuilderDoc(){
      this.$router.push('/XinBuilder/createPage')
    }
  }
}
</script>

<style lang="css" scoped>
  .header{
    width:100%;
    height: 60px;
    box-shadow: 0 0 2px 2px rgb(212, 212, 212);
    position: relative;
  }
  .title{
    font-size: 20px;
    position: absolute;
    left: 40px;
    top: 13px;
    color: rgb(131, 127, 236);
  }
  .XinBuilder{
    font-size: 12px;
    float: right;
    position: absolute;
    right: 100px;
    top: 10px;
  }
  .XinBuilder .ant-btn-link{
    color: #2c3e50;
  }
  .XinBuilder .ant-btn-link:hover{
    color: rgb(131, 127, 236);
  }
</style>