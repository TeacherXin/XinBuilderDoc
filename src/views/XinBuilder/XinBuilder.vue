<template>
  <div class="XinBuilderDoc">
    <div class="leftList">
      <a-menu :selectedKeys="['Xinbuilder/createPage']" mode="vertical">
        <a-menu-item @click="changeDoc(item.key)" v-for="item in leftList" :key="item.key">
          {{ item.name || item }}
        </a-menu-item>
      </a-menu>
    </div>
    <div class="rightDoc">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      leftList: [
        {name: '创建页面',key: 'Xinbuilder/createPage'},
        {name: '配置属性',key: 'Xinbuilder/attributeConfig'},
        {name: '配置样式',key: 'Xinbuilder/styleConfig'},
        {name: '配置事件',key: 'Xinbuilder/actionConfig'},
        'B','C','D','E','F','G','H','I','J','K','L','M','N'
      ]
    }
  },
  methods: {
    changeDoc(item){
      this.$router.push('/' + item)
    }
  }
}
</script>

<style lang="css" scoped>
  .XinBuilderDoc{
    display: flex;
    height: 90vh;
  } 
  .leftList {
    width: 20%;
    height: 100%;
    overflow: scroll;
  }
  .rightDoc{
    width:80%;
    height: 100%;
    overflow: scroll;
    margin-left: 30px;
  }
</style>