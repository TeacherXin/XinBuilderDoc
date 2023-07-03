<template>
  <div class="XinBuilderDoc">
    <div class="leftList">
      <a-menu :selectedKeys="[selectedKey]" mode="vertical">
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
        {name: '模型对象xinCtx',key: 'Xinbuilder/xinCtxData'},
        {name: '实现ToDoList页面',key: 'Xinbuilder/toDoList'},
        {name: 'Flex布局容器',key: 'Xinbuilder/xinFlex'},
        {name: '使用Flex优化ToDoList',key: 'Xinbuilder/newToDoLiST'},
        {name: '轮播图组件',key: 'Xinbuilder/xinLunBo'},
        {name: 'Form表单组件',key: 'Xinbuilder/xinForm'},
        'B','C','D','E','F','G','H','I','J','K','L','M','N'
      ],
      selectedKey: 'Xinbuilder/createPage'
    }
  },
  methods: {
    changeDoc(item){
      this.$router.push('/' + item),
      this.selectedKey = item
    }
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route: {
      handler: function(val, oldVal){
        this.selectedKey = val.fullPath.replace('/','')
        console.log(this.selectedKey)
      },
      immediate:true,
      deep: true
    }
  },
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