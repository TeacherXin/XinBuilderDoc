import MainDoc from '../views/MainDoc.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import XinBuilder from '../views/XinBuilder/XinBuilder.vue'
import createPage from '../views/XinBuilder/components/CreatePage.vue'
import attributeConfig from '../views/XinBuilder/components/AttributeConfig.vue'
import styleConfig from '../views/XinBuilder/components/StyleConfig.vue'
import actionConfig from '../views/XinBuilder/components/ActionConfig.vue'
import xinCtxData from '../views/XinBuilder/components/XinCtxData.vue'
import toDoList from '../views/XinBuilder/components/ToDoList.vue'
import xinFlex from '../views/XinBuilder/components/XinFlex.vue'
import newToDoList from '../views/XinBuilder/components/NewToDoList.vue'
import xinLunBo from '../views/XinBuilder/components/XinLunBo.vue'
import xinForm from '../views/XinBuilder/components/XinForm.vue'
import xinTable from '../views/XinBuilder/components/XinTable.vue'
import formToTable from '../views/XinBuilder/components/FormToTable.vue'

const routes = [
  { path: '/MainDoc', component: MainDoc },
  { 
    path: '/XinBuilder',
    component: XinBuilder,
    children: [
      {
        path: 'createPage',
        component: createPage
      },
      {
        path: 'attributeConfig',
        component: attributeConfig
      },
      {
        path: 'styleConfig',
        component: styleConfig
      },
      {
        path: 'actionConfig',
        component: actionConfig
      },
      {
        path: 'xinCtxData',
        component: xinCtxData
      },
      {
        path: 'toDoList',
        component: toDoList
      },
      {
        path: 'xinFlex',
        component: xinFlex
      },
      {
        path: 'newToDoList',
        component: newToDoList
      },
      {
        path: 'xinLunBo',
        component: xinLunBo
      },
      {
        path: 'xinForm',
        component: xinForm
      },
      {
        path: 'xinTable',
        component: xinTable
      },
      {
        path: 'formToTable',
        component: formToTable
      }
    ]
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export default createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})